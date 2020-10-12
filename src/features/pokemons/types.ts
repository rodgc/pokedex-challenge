import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SAVE_POKEMON,
  SAVE_POKEMONS,
} from './actionTypes'

interface SavePokemonsAction {
  type: typeof SAVE_POKEMONS
  pokemons: []
}

interface SavePokemonAction {
  type: typeof SAVE_POKEMON
  pokemon: []
}

interface AddFavoritePokemonAction {
  type: typeof ADD_TO_FAVORITE
  pokemon: {}
}

interface RemoveFavoritePokemonAction {
  type: typeof REMOVE_FROM_FAVORITE
  pokemon: {}
}

export type PokemonActionTypes =
  | SavePokemonsAction
  | SavePokemonAction
  | AddFavoritePokemonAction
  | RemoveFavoritePokemonAction

export interface SystemState {
  pokemons: {
    pokemons: []
    favorites: []
  }
}
