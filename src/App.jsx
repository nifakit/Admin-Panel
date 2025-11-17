import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Topbar from './components/Topbar'
import Dashboard from './pages/Dashboard'
import Users from './pages/Users'
import Orders from './pages/Orders'
import Products from './pages/Products'


function App() {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <BrowserRouter>
        <Topbar />
        <div className="flex">
          <Navbar />
          <div className="flex-1 p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/users" element={<Users />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/products" element={<Products />} />
            </Routes>
          </div>

        </div>

      </BrowserRouter>
    </div>
  );
}



export default App

