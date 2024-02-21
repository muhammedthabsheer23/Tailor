import React from 'react'
import { RiAccountCircleFill } from "react-icons/ri";
import {BsCart3,BsGrid1X2Fill,BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsListCheck,BsMenuButtonWideFill,BsFillGearFill} from 'react-icons/bs'
import { useAuth } from './AuthContext';
import { Link } from 'react-router-dom';
import { GoDotFill } from "react-icons/go";

function Sidebar({openSidebarToggle,opensidebar}) {
    const { loggedInUser } = useAuth();
  return (

    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
          <div className="box">
          <RiAccountCircleFill className='icon_header' /> <h3>{loggedInUser}</h3> 
    </div>
    <hr />
<div className='sidebar-title'>
  
    <div className='sidebar-brand'>
   <BsCart3 className='icon_header'/>  SHOP
</div>
<span className='icon close_icon' onClick={opensidebar}>X</span>
</div>
<ul className='sidebar-list'>
<li className='sidebar-list-item'>
    <a href="">
     <BsGrid1X2Fill className='icon'/>Dashboard
    </a>
</li>
<div className='icons'>
<li className='sidebar-list-item'>
    <a href="">
        <BsFillArchiveFill className='icon'/>Products 
    </a> 
    <ul className='submenu'>
      <Link to={`/product`}>  <li>
          <a href="" ><GoDotFill />
product 1</a>
        </li></Link>
        <li>
            <a href=""><GoDotFill />product 2</a>
        </li>
        <li>
            <a href=""><GoDotFill />product 3</a>
        </li>
    </ul>
</li></div>
<li className='sidebar-list-item'>
    <a href="">
        <BsFillGrid3X3GapFill className='icon'/>Categories

    </a>
    <ul className='submenu'>
        <li>
            <a href=""><GoDotFill />Categories 1</a>
        </li>
        <li>
            <a href=""><GoDotFill />Categories 2</a>
        </li>
        <li>
            <a href=""><GoDotFill />Categories 3</a>
        </li>
    </ul>
</li>
<li className='sidebar-list-item'>
    <a href="">
        <BsPeopleFill className='icon'/>Customers

    </a>
</li>
<div className='icons'>
<li className='sidebar-list-item'>
    <a href="">
        <BsListCheck className='icon'/>Inventory

    </a>
</li>
</div>
<div className='iconss'>
<li className='sidebar-list-item'>
    <a href="">
        <BsMenuButtonWideFill className='icon'/>Reports

    </a>
</li>
</div>
<div className='iconsss'>
<li className='sidebar-list-item'>
    <a href="">
        <BsFillGearFill className='icon'/>Setting

    </a>
</li>
</div>
</ul>
    </aside>
  )
  }

export default Sidebar