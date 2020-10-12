import {
  SAVE_POKEMONS,
  SAVE_POKEMON,
  REMOVE_FROM_FAVORITE,
  ADD_TO_FAVORITE,
} from './actionTypes'
import { PokemonActionTypes } from './types'

const initialState = {
  pokemons: [],
  favorites: [],
}

export default (state = initialState, action: PokemonActionTypes) => {
  switch (action.type) {
    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorites: [{ ...action.pokemon }, ...state.favorites],
      }
    case REMOVE_FROM_FAVORITE:
      return { ...state, favorites: [{ ...action.pokemon }] }
    case SAVE_POKEMONS:
      return { ...state, pokemons: [...action.pokemons] }
    case SAVE_POKEMON:
      return { ...state, pokemons: [{ ...action.pokemon }] }
    default:
      return state
  }
}
