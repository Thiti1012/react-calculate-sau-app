import React from 'react'
// ไฟล์สำหรับใช้ทำ Route ต่างๆของการ Re-render Page Component
import Home from './pages/Home'
import Car from './pages/Car'
import Bmi from './pages/Bmi'
import Bmr from './pages/Bmr'
import { BrowserRouter, Routes, Route} from 'react-router'
BrowserRouter

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/car" element={<Car />} />
        <Route path="/bmi" element={<Bmi />} />
        <Route path="/bmr" element={<Bmr />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
