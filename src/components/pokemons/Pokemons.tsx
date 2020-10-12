import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, selectors } from '../../features/pokemons'

interface Props {
  pokemons: []
}

function Pokemons({ pokemons }: Props) {
  const favoritesPokemons = useSelector(selectors.getFavoritesPokemons)
  const dispatch = useDispatch()

  const onFavorite = (pokemon: any) => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITE, pokemon })
  }

  const onRemoveFavorite = (pokemon: any) => {
    dispatch({ type: actionTypes.REMOVE_FROM_FAVORITE, pokemon })
  }

  const isFavorite = (pokemonId: number) => {
    const pokemon = favoritesPokemons.filter(
      (_pokemon: { id: number }) => _pokemon.id === pokemonId,
    )

    return pokemon.length > 0
  }
  return (
    <div className="row">
      {pokemons.map((pokemon: { name: string; id: number }) => (
        <div key={pokemon.name} className="col s12 m4">
          <div className="card">
            <div className="card-image">
              <img
                src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
              />
              {isFavorite(pokemon.id) ? (
                <button
                  className="btn-floating halfway-fab waves-effect waves-light red"
                  type="button"
                  onClick={() => onRemoveFavorite(pokemon)}
                >
                  <i className="material-icons">favorite</i>
                </button>
              ) : (
                <button
                  className="btn-floating halfway-fab waves-effect waves-light grey"
                  type="button"
                  onClick={() => onFavorite(pokemon)}
                >
                  <i className="material-icons">favorite</i>
                </button>
              )}
            </div>
            <div className="card-content">
              <span className="card-title">{pokemon.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pokemons
