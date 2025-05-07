import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodDetails from './routes/FoodDetails.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index path='/home' element={<App />} />
        <Route path='/food-details/:mealId' element={<FoodDetails />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
