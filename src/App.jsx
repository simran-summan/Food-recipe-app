import { Outlet } from 'react-router-dom'
import './App.css'
import Home from './component/Home/Home'
import Navbar from './component/navbar/Navbar'
import RecipeContextProvider from './context/RecipeContextProvider'

function App() {
  return (
    <RecipeContextProvider>
    <Navbar/>
    <Outlet/>
    </RecipeContextProvider>
  )
}

export default App
