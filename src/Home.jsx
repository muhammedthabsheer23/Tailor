import React from 'react'
import {BsFillArchiveFill,BsFillGrid3X3GapFill,BsPeopleFill,BsFillBellFill} from 'react-icons/bs'
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, LineChart } from 'recharts';
import { FcSalesPerformance } from "react-icons/fc";
import { GiProfit } from "react-icons/gi";
function Home() {
    const data = [
        {
          name: 'january',
          uv:2500,
          pv:2200,
          amt:15487,
          
        },
        {
          name: 'february',
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'march',
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'april',
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'may',
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'june',
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'july',
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];




  return (
    <main className='main-container home'>
  <div className='main-title'>
    <h3>DASHBOARD</h3>
  </div>

  <div className='main-cards'>
    <div className='card'>
        <div className='card-inner'>
            <h3>Sales</h3>
            <FcSalesPerformance  className='card_icon'/>
        </div>
        <h1>1500</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>Employees</h3>
            <BsPeopleFill className='card_icon'/>
        </div>
        <h1>125</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>Profit</h3>
            <GiProfit  className='card_icon'/>
        </div>
        <h1>1200000</h1>
    </div>
    <div className='card'>
        <div className='card-inner'>
            <h3>Pending Job Orders</h3>
            <BsFillBellFill className='card_icon'/>
        </div>
        <h1>10</h1>
    </div>
  </div>
  <div className='charts'>

  <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
  </div>
    </main>
  
  )
}

export default Home