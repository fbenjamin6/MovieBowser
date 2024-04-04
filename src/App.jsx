import { React } from 'react'
import './App.css'
import { HomePage } from './pages/HomePage'
import { Route } from 'wouter'
import { MovieListPage } from './pages/MovieListPage'
import { MoviePage } from './pages/MoviePage'
import { SearchPage } from './pages/SearchPage'

function App () {
  return (
    <>
      <Route path='/' > <HomePage/> </Route>
      <Route path='/list/movies'><MovieListPage/></Route>
      <Route path='/list/movies/:type'><MovieListPage/></Route>
      <Route path='/movie/:id'><MoviePage/></Route>
      <Route path='/search/q=:query'><SearchPage/></Route>
      <Route path='/search/genre=:genre'><SearchPage/></Route>
    </>
  )
}

export default App
