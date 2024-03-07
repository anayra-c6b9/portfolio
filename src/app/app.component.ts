import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
})
export class AppComponent implements OnInit {
  title = 'portfolio-website';

  ngOnInit(): void {
    if (
      localStorage.getItem('aryan-portfolio-theme') === 'dark' &&
      !document.documentElement.classList.contains('dark')
    )
      document.documentElement.classList.add('dark');
  }
}
