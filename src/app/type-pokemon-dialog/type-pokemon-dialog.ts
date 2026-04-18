import { Component, inject, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialog, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { Pokemon, PokemonService } from '../services/pokemon';
import { TeamSlot } from '../services/team';
import { PokemonCard } from '../pokemon-card/pokemon-card';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';

export interface TypePokemonDialogData {
  type: string;
  pokemon: string[];
}

@Component({
  selector: 'app-type-pokemon-dialog',
  standalone: true,
  imports: [CommonModule, PokemonCard, MatDialogModule, MatButtonModule, FormsModule, MatInputModule, MatFormFieldModule, MatIconModule],
  templateUrl: './type-pokemon-dialog.html',
  styleUrl: './type-pokemon-dialog.css',
})
export class TypePokemonDialog {
 
  hoveredPokemon = signal<Pokemon | null>(null);
  private overlay = inject(Overlay);
  private overlayRef: OverlayRef | null = null;
  private dialog = inject(MatDialog);
  private pokemonService = inject(PokemonService);
  data = inject<TypePokemonDialogData>(MAT_DIALOG_DATA);
  private dialogRef = inject(MatDialogRef<TypePokemonDialog>);

    showPokeCard(name: string) {
    this.clearOverlay();

    /* for when the user hovers over a pokemon name, I want to show a preview of the pokemon to the left */
    this.overlayRef = this.overlay.create({
      positionStrategy: this.overlay.position()
        .global()
        .centerVertically()
        .left('calc(50% + 400px)'), 
      hasBackdrop: false,
    });

    const portal = new ComponentPortal(PokemonCard);
    const ref = this.overlayRef.attach(portal);
    this.pokemonService.getPokemon(name.toLowerCase()).subscribe(pokemon => {
      const pok = pokemon;
      this.hoveredPokemon.set(pok);
    });
      
  }

    clearOverlay() {
    this.overlayRef?.dispose();
    this.overlayRef = null;
  }

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