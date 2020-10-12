/* eslint-disable no-case-declarations */
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
      const isFavorite = state.favorites.find(
        (pokemon: { id: number }) => pokemon.id === action.pokemon.id,
      )

      const newFavorites = [...state.favorites, { ...action.pokemon }]

      if (isFavorite) {
        return state
      }

      localStorage.setItem('favorites', JSON.stringify([...newFavorites]))
      return {
        ...state,
        favorites: [...newFavorites],
      }

    case REMOVE_FROM_FAVORITE:
      const favorites = JSON.parse(JSON.stringify([...state.favorites]))

      const [pokemonInArray] = favorites.filter(
        (_pokemon: { id: number }) => _pokemon.id === action.pokemon.id,
      )

      const idx = favorites.indexOf(pokemonInArray)

      favorites.splice(idx, 1)

      localStorage.setItem('favorites', JSON.stringify([...favorites]))
      return { ...state, favorites: [...favorites] }
    case SAVE_POKEMONS:
      return { ...state, pokemons: [...action.pokemons] }
    case SAVE_POKEMON:
      return { ...state, pokemons: [{ ...action.pokemon }] }
    default:
      return state
  }
}
