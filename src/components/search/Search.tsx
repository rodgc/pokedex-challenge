import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from '../../axios'
import { actionTypes } from '../../features/pokemons'

function Search() {
  const [searchValue, setSearchValue] = useState('')
  const dispatch = useDispatch()

  const getPokemon = async () => {
    const { data } = await axios({
      method: 'get',
      url: `/pokemon/${searchValue.toLowerCase()}`,
    })

    dispatch({ type: actionTypes.SAVE_POKEMON, pokemon: { ...data } })
  }

  const onSubmit = (): void => {
    getPokemon()
  }

  const getInitialPokemons = async () => {
    let pokemons: Array<Object> = []
    const {
      data: { results },
    } = await axios({
      method: 'get',
      url: `/pokemon?limit=150`,
    })

    pokemons = results.map(async (pokemon: { name: string; url: string }) => {
      const [, pokemonId] = pokemon.url.split('/pokemon/')
      const { data } = await axios({
        method: 'get',
        url: `/pokemon/${pokemonId}`,
      })
      return data
    })

    Promise.all(pokemons).then((_pokemons) => {
      dispatch({ type: actionTypes.SAVE_POKEMONS, pokemons: [..._pokemons] })
    })

    setSearchValue('')
  }

  useEffect(() => {
    getInitialPokemons()
    // eslint-disable-next-line
  }, [])

  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <div className="input-field col s10">
            <input
              className="validate"
              placeholder="Search Pokemon name or National Dex"
              id="name"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="input-field col s1">
            <button
              className="waves-effect waves-light btn"
              type="button"
              onClick={onSubmit}
            >
              Search
            </button>
          </div>
          <div className="input-field col s1">
            <button
              className="waves-effect waves-light btn"
              type="button"
              onClick={getInitialPokemons}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
