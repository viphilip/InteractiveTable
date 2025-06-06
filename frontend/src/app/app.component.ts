import { Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './components/table/table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TableComponent,
    HttpClientModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontend';
}
