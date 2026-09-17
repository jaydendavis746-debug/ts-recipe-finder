import { Header } from './components'
import { HomePage, RecipesPage, RecipePage, SearchPage } from './pages'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
 
  return(
    <>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<HomePage />} />
          <Route path='/recipes' element={<RecipesPage />} />
          <Route path='/recipes/:id' element={<RecipePage />} />
          <Route path='/search' element={<SearchPage />} />
          <Route path='/search/:id' element={<RecipePage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
