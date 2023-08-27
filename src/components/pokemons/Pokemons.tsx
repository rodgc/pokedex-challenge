import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes, Pokemon, selectors } from '../../features/pokemons'

interface Props {
  pokemons: Pokemon[]
}

function Pokemons({ pokemons }: Props) {
  const favoritesPokemons = useSelector(selectors.getFavoritesPokemons)
  const dispatch = useDispatch()

  const onFavorite = (pokemon: Pokemon) => {
    dispatch({ type: actionTypes.ADD_TO_FAVORITE, pokemon })
  }

  const onRemoveFavorite = (pokemon: Pokemon) => {
    dispatch({ type: actionTypes.REMOVE_FROM_FAVORITE, pokemon })
  }

  const isFavorite = (pokemonId: number) => {
    const pokemon = favoritesPokemons.filter(
      (_pokemon: { id: number }) => _pokemon.id === pokemonId,
    )

    return pokemon.length > 0
  }

  const getPokemonTypes = (types: Pokemon['types']) => {
    const typesList: any[] = []
    types.forEach((_types: { type: { name: string } }) =>
      typesList.push(_types.type.name),
    )

    return typesList.join(' & ')
  }

  return (
    <div className="row">
      {pokemons.map((pokemon: Pokemon) => (
        <div key={pokemon.id} className="col s12 m3">
          <div className="card">
            <div className="card-image">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
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
              <p>National Dex: {pokemon.id} </p>
              <p>Type: {getPokemonTypes(pokemon.types)} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Pokemons
