import './App.css';
import Main from './Components/Main';
import {Route, Routes} from 'react-router-dom'
import Card from './Components/UI/Card'
import { useState } from 'react'
import CustomNavbar from './Components/UI/CustomNavbar';
function App() {
  const [title,setTitle] = useState('')
  
  return (
    <div>
    <CustomNavbar setTitle = {setTitle}/>
    <Routes>
   
    <Route path = "/" element = {<Main/>} />
    <Route path = "/Card/:id" element = {<Card/>} />
    </Routes>
    </div>
  );
}

export default App;
