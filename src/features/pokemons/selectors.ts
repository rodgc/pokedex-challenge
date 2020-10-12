import { SystemState } from './types'

export const getPokemons = (state: SystemState) => state.pokemons.pokemons
export const getFavoritesPokemons = (state: SystemState) =>
  state.pokemons.favorites
