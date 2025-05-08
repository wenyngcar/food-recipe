import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from './components/Header.tsx'
import App from './App.jsx'
import FoodDetails from './routes/FoodDetails.tsx'
import FilteredMeals from './components/FilteredMeals.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route index path='/home' element={<App />} />
          <Route path='/food-details/:mealId' element={<FoodDetails />} />
          <Route path='/home/:category' element={<FilteredMeals />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
