import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { HeaderComponent } from './components/header/header.component';
import { ApiService } from './services/api.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatSlideToggleModule,
    DashboardComponent,
    SearchComponent,
    HeaderComponent,
  ],
  providers: [ApiService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'entertainment-find';
}
