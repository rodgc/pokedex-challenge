import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Navbar } from './components/Navbar'
import { actionTypes } from './features/pokemons'
import { Favorites } from './pages/Favorites'
import { Home } from './pages/Home'

const App: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch({ type: actionTypes.GET_FAVORITE_FROM_LOCAL_STORAGE })
  })

  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Favorites" component={Favorites} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
