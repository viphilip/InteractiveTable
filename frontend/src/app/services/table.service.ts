import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

export interface TableCell {
  row: number;
  col: string;
  value: string;
}

@Injectable({
  providedIn: 'root'
})
export class TableService {
  private baseUrl = 'http://localhost/3000/table';

  constructor(private http: HttpClient) {}

  getTable(): Observable<TableCell[]> {
    return this.http.get<TableCell[]>(this.baseUrl).pipe(
      catchError(this.handleError)
    );
  }

  updateCell(cell: TableCell): Observable<any> {
    return this.http.post(this.baseUrl, cell).pipe(
      catchError(this.handleError)
    );
  }

  initTable(): Observable<any> {
    return this.http.get(`${this.baseUrl}/init`).pipe(
      catchError(this.handleError)
    )
  }
  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error: ', error);
    if (error.error instanceof ErrorEvent) {
      return throwError(() => new Error(`Client error : ${error.error.message}`));
    } else {
      return throwError(() => new Error(`Server error : ${error.status} - ${error.message}`));
    }
  }
}
