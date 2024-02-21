import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import './Home1.css';
import { useState } from 'react';
import Home2 from './Home2';
function Dashboard2() {
    const[openSidebarToggle,setopenSidebarToggle]=useState(false)
const opensidebar =()=>
{
  setopenSidebarToggle(!openSidebarToggle)
}
  return (
    <div className='grid-container'>
<Header opensidebar={opensidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} opensidebar={opensidebar}/> 
      <Home2/>
    </div>
  )
}

export default Dashboard2