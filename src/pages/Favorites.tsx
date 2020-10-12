import React from 'react'
import { useSelector } from 'react-redux'
import { Pokemons } from '../components'
import { selectors } from '../features/pokemons'

export const Favorites: React.FC = () => {
  const pokemons = useSelector(selectors.getFavoritesPokemons)

  return <Pokemons pokemons={pokemons} />
}
