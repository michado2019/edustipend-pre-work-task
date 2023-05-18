import React from 'react'
import {Routes, Route} from 'react-router-dom'
import './index.css'
import Home from '../pages/home/Home'
const AppRouter = () => {
  return (
    <div className='indexWrapper'>
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    </div>
  )
}

export default AppRouter