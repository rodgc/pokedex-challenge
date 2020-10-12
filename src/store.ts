import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import { PokemonsReducer } from './features/pokemons'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
  pokemons: PokemonsReducer,
})

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer({}),
)

export default store
