import { Routes, Route, Navigate } from "react-router-dom"
import Header from './components/Header.tsx'
import Home from './routes/Home.tsx'
import FoodDetails from './routes/FoodDetails.tsx'
import FilteredPage from './routes/FilteredPage.tsx'

function App() {
  return (
    <Routes>
      <Route element={<Header />}>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route index path='/home' element={<Home />} />
        <Route path='/food-details/:mealId' element={<FoodDetails />} />
        <Route path='/home/:filter/:query' element={<FilteredPage />} />
      </Route>
    </Routes>
  )
}

export default App
