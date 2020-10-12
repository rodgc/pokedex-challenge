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
    const {
      data: { results },
    } = await axios({
      method: 'get',
      url: `/pokemon?limit=150`,
    })

    dispatch({ type: actionTypes.SAVE_POKEMONS, pokemons: [...results] })
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
          <div className="input-field col s8">
            <input
              className="validate"
              placeholder="Search Pokemon"
              id="name"
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          <div className="input-field col s2">
            <button
              className="waves-effect waves-light btn"
              type="button"
              onClick={onSubmit}
            >
              Search
            </button>
          </div>
          <div className="input-field col s2">
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
