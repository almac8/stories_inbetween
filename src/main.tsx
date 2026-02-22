import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'

createRoot(document.getElementById('main_layout')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/who_we_are" element={ <h1>Who we are</h1> } />
        <Route path="/what_we_do" element={ <h1>What we do</h1> } />
        <Route path="/follow_us" element={ <h1>Follow us</h1> } />
        <Route path="/support_us" element={ <h1>Support us</h1> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)