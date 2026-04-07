import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

export interface TypePokemonDialogData {
  type: string;
  pokemon: string[];
}

@Component({
  selector: 'app-type-pokemon-dialog',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './type-pokemon-dialog.html',
  styleUrl: './type-pokemon-dialog.css',
})
export class TypePokemonDialog {
  /*  injec */
  data = inject<TypePokemonDialogData>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<TypePokemonDialog>);

  searchTerm = '';

  get filteredPokemon(): string[] {
    if (!this.searchTerm) return this.data.pokemon;
    return this.data.pokemon.filter(p =>
      p.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  close(): void {
    this.dialogRef.close();
  }
}