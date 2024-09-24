import React from 'react'
import { Route, Routes } from 'react-router-dom'
import {Cars, SingleCar, Users, Home, AddUser} from "../pages"

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/cars/:id' element={<SingleCar/>}/>
        <Route path='/users' element={<Users/>}/>
        <Route path='/users/add' element={<AddUser/>}/>
    </Routes>
  )
}

export default CustomRoutes