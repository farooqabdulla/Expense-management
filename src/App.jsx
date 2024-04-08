import React from 'react'
import Signup from './components/Signup'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import View from './components/View'
import Add from './components/Add'
import Update from './Update'
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signup/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/viewexpenses' element={<View/>}/>
          <Route path='/addexpenses' element={<Add/>}/>
          <Route path='/editexpenses/:id' element={<Update/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App