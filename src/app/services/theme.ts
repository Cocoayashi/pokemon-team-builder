import { Injectable, signal, effect } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  isDarkMode = signal<boolean>(false);

constructor() {
    // default to browser preference
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.isDarkMode.set(prefersDark);

    effect(() => {
      const dark = this.isDarkMode();
      document.body.style.colorScheme = dark ? 'dark' : 'light';
    });
}

toggle(): void {
  this.isDarkMode.update(v => !v);
}
}