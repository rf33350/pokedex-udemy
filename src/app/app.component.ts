import { Component, OnInit } from '@angular/core';
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`
})

export class AppComponent implements OnInit {
  title = `Liste de Pokémons`
  pokemonList: Pokemon[] = POKEMONS;
  pokemonSelected: Pokemon|undefined;

  ngOnInit() {
  }

  selectPokemon(pokemonId: string) {
    const pokemon: Pokemon|undefined = this.pokemonList.find(pokemon => pokemon.id == +pokemonId);
    
    if(pokemon) {
    }
    else {
    }
    this.pokemonSelected = pokemon;
  }
}
