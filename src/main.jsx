import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import FoodDetails from './routes/FoodDetails.tsx'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Header from './components/Header.tsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route index path='/home' element={<App />} />
          <Route path='/food-details/:mealId' element={<FoodDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
