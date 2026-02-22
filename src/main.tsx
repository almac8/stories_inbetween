import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import HomePage from './pages/HomePage/HomePage'
import Header from './components/Header/Header'
import WhoWeArePage from './pages/WhoWeArePage/WhoWeArePage'
import WhatWeDoPage from './pages/WhatWeDoPage/WhatWeDoPage'
import ContactUsPage from './pages/ContactUsPage/ContactUsPage'
import SupportUsPage from './pages/SupportUsPage/SupportUsPage'

createRoot(document.getElementById('main_layout')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={ <HomePage /> } />
        <Route path="/who_we_are" element={ <WhoWeArePage /> } />
        <Route path="/what_we_do" element={ <WhatWeDoPage /> } />
        <Route path="/contact_us" element={ <ContactUsPage /> } />
        <Route path="/support_us" element={ <SupportUsPage /> } />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)