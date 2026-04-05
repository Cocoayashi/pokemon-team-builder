import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ThemeService } from './services/theme';

@Component({
  selector: 'app-root',
  standalone: true, // Angular recommends using standalone for new code, instead of NgModule
  imports: [RouterOutlet, MatIconModule, MatButtonModule], // Declarations because its standalone
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  
  // make it private because I like to use wrappers
  private themeService = inject(ThemeService);

  isDarkMode() {
    return this.themeService.isDarkMode();
  }

  toggleTheme() {
    this.themeService.toggle();
  }
}