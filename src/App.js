import logo from './logo.svg';
import './App.css';
import Admin from './Admin';
import Router from './Router';
import { createContext, useState } from 'react';
import Data from './Data';

const NewContext=createContext();
function App() {
  const [data, setData] = useState(Data);
  console.log(data)
  const[openSidebarToggle,setopenSidebarToggle]=useState(false)
const opensidebar =()=>
{
  setopenSidebarToggle(!openSidebarToggle)
}
  return (
    
       <div className="App">
   <NewContext.Provider value={[data,setData]}>
   <Router/>
   </NewContext.Provider>
    </div>
  );
}

export default App;
export {NewContext}