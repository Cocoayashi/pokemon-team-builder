import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal<boolean>(false);

constructor() {
  effect(() => {
    const dark = this.isDarkMode();
    document.body.style.colorScheme = dark ? 'dark' : 'light';
  });
}

toggle(): void {
  this.isDarkMode.update(v => !v);
  console.log('dark mode:', this.isDarkMode());
}
}