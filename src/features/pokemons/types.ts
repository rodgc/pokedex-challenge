import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
  SAVE_POKEMON,
  SAVE_POKEMONS,
  GET_FAVORITE_FROM_LOCAL_STORAGE,
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
  pokemon: { id: number }
}

interface RemoveFavoritePokemonAction {
  type: typeof REMOVE_FROM_FAVORITE
  pokemon: { id: number }
}

interface GetFavoritePokemonsFromLocalStorageAction {
  type: typeof GET_FAVORITE_FROM_LOCAL_STORAGE
}

export type PokemonActionTypes =
  | SavePokemonsAction
  | SavePokemonAction
  | AddFavoritePokemonAction
  | RemoveFavoritePokemonAction
  | GetFavoritePokemonsFromLocalStorageAction

export interface SystemState {
  pokemons: {
    pokemons: []
    favorites: []
  }
}
