import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './component/Home/Home.jsx'
import Favorite from './component/favorite/Favorite.jsx'
import Details from './component/details/Details.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<App/>}>
    <Route path='' element = {<Home/>}/>
    <Route path='/Favorite' element = {<Favorite/>}/>
    <Route path='/recipe-item/:id' element = {<Details/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
