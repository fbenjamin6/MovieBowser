import { React } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Route } from 'wouter'
import { MovieListPage } from './pages/MovieListPage'
import { MoviePage } from './pages/MoviePage'

function App () {
  return (
    <>
      <Route path='/' > <HomePage/> </Route>
      <Route path='/movielist'><MovieListPage/></Route>
      <Route path='/movielist/:type'><MovieListPage/></Route>
      <Route path='/movie/:id'><MoviePage/></Route>
    </>
  )
}

export default App
