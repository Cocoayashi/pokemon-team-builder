import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypePokemonDialog } from './type-pokemon-dialog';

describe('TypePokemonDialog', () => {
  let component: TypePokemonDialog;
  let fixture: ComponentFixture<TypePokemonDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypePokemonDialog],
    }).compileComponents();

    fixture = TestBed.createComponent(TypePokemonDialog);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
