import { Routes, Route } from 'react-router-dom'

import { Dish } from '../pages/Dish'
import { Home } from '../pages/Home'
import { NewDish } from '../pages/NewDish'
import { EditDish } from '../pages/EditDish'

export function AppRoutes() {
  return(
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/details/:id' element={<Dish/>} />
      <Route path='/new' element={<NewDish/>} />
      <Route path='/edit' element={<EditDish/>} />
    </Routes>
  )
}