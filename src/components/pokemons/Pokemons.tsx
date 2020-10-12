import React from 'react'
import { useDispatch } from 'react-redux'
import { actionTypes } from '../../features/pokemons'

interface Props {
  pokemons: []
}

function Pokemons({ pokemons }: Props) {
  const dispatch = useDispatch()

  const onFavorite = (pokemon: any) => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITE, pokemon })
  }

  return (
    <div className="row">
      {pokemons.map((pokemon: { name: string }) => (
        <div key={pokemon.name} className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <button
                className="btn-floating halfway-fab waves-effect waves-light red"
                type="button"
                onClick={() => onFavorite(pokemon)}
              >
                <i className="material-icons">favorite</i>
              </button>
            </div>
            <div className="card-content">{pokemon.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pokemons
