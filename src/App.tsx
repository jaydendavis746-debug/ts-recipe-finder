import { Header } from './components'
import { HomePage, RecipesPage } from './pages'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 
  return(
    <>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path='/recipes' element={<RecipesPage />} />

        </Route>
      </Routes>
    </>
  )
}

export default App
