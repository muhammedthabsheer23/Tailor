import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import './Home1.css';
import { useState } from 'react';
function Dashboard() {
    const[openSidebarToggle,setopenSidebarToggle]=useState(false)
const opensidebar =()=>
{
  setopenSidebarToggle(!openSidebarToggle)
}
  return (
    <div className='grid-container'>
<Header opensidebar={opensidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} opensidebar={opensidebar}/> 
      <Home/>
    </div>
  )
}

export default Dashboard