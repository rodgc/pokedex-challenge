import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Pokemons, Search } from '../components'
import { selectors } from '../features/pokemons'

export const Home: React.FC = () => {
  const pokemons = useSelector(selectors.getPokemons)
  return (
    <Fragment>
      <Search />
      <Pokemons pokemons={pokemons} />
    </Fragment>
  )
}
