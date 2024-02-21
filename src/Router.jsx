import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './Admin'
import Dashboard from './Dashboard'
import Dashboard2 from './Dashboard2'
function Router() {
  return (
    <div>
<BrowserRouter>
<Routes>
    <Route path='/' element={<><Admin/></>}/>
    <Route path='admin' element={<><Dashboard/></>}/>
    <Route path='/product' element={<><Dashboard2/></>}/>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Router