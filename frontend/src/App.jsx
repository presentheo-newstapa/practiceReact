// import { useState } from 'react'
// import reactLogo from './assets/react.svg's
// import viteLogo from '/vite.svg's
import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/index';
import LoginPage from './pages/LoginPage/index';
import RegisterPage from './pages/RegisterPage/index';
import Navbar from './layout/Navbar/index';
import Footer from './layout/Footer/index';

function Layout() {
  return (
    <div className='flex flex-col h-screen justify-between'>
      <Navbar />
        <main className='mb-auto'>
          <Outlet />
        </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />

        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />

      </Route>
    </Routes>
  )
}

export default App
