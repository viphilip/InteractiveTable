import { Component, OnInit } from "@angular/core";
import { TableService, TableCell} from "../../services/table.service";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface CellKey {
  row: number;
  col: string;
}

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.output.css']
})
export class TableComponent implements OnInit {
  
  cols: string[] = [];
  rows: number[] = [];

  tableData: Record<string, string> = {};

  highlightedRow: number | null = null;
  highlightedCol: string | null = null;

  editingCell: CellKey | null = null;
  editedValue: string = '';
  
  constructor(private tableService: TableService) {

    this.tableService.initTable().subscribe({
      next: () => {
        console.log('Table initialized');
      },
      error: (err) => {
        console.error('Error while initializing table:', err.message);
      }
    })
  }

  ngOnInit(): void {
    this.initHeaders();
    this.initData();
  }
  

  private initHeaders(): void {
    this.cols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    this.rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  }

  private initData(): void {
    this.tableService.getTable().subscribe({
      next: (data: TableCell[]) => {
        for (const cell of data) {
          const key = this.cellKey(cell.row, cell.col);
          this.tableData[key] = cell.value;
        }
      },
      error: (err) => {
        console.error('Error while loading table:', err.message);
      }
    })
  }

  private cellKey(row: number, col: string){
    return `${row}-${col}`;

  }

  public reset(): void {
    this.tableService.resetTable(true).subscribe({
      next:() => {
        this.initData();
      },
      error: err => {
        console.error('Error while reset table:', err.message);
      }
    });
  }

  public getCellValue(row: number, col: string): string {
    return this.tableData[this.cellKey(row, col)];
  }

  public isHightlighted(row: number, col: string): boolean {
    return this.highlightedCol === col || this.highlightedRow === row;
  }

  public highlightRow(row: number): void {
    this.highlightedRow = this.highlightedRow === row ? null : row;
    this.highlightedCol = null;
  }

  public highlightCol(col: string): void {
    this.highlightedCol = this.highlightedCol === col ? null : col;
    this.highlightedRow = null;
  }

  public isEditing(row: number, col: string): boolean {
    return this.editingCell?.row === row && this.editingCell?.col === col;
  }

  public editCell(row: number, col: string): void {
    this.editingCell = { row, col };
    this.editedValue = this.getCellValue(row, col);
  }

  saveCell(row: number, col: string): void {
    if (!this.editingCell) return;

    const key = this.cellKey(row, col);
    const newValue = this.editedValue;

    this.tableData[key] = newValue;

    this.editingCell = null;
    this.editedValue = '';

    this.tableService.updateCell({ row, col, value: newValue }).subscribe({
      next: () => {
        console.log(`Cell ${col}${row} updated`);
      },
      error: (err) => {
        console.error(`Update failed: `, err.message);
      }
    })
  }
}