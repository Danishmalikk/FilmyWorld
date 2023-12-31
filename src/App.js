import { Card } from "./components/Card";
import { Header } from "./components/Header";
import {Route, Routes} from 'react-router-dom';
import AddMovie from "./components/AddMovie";
import Detail from "./components/Detail";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";



const Appstate = createContext()

function App() {
  const[login, setLogin] = useState(false)
  const[userName,setUserName] = useState("")
  return (
    <Appstate.Provider value={{login, userName, setLogin, setUserName}}>
    <div className="App relative">
      <Header/>
      <Routes>
        <Route path='/' element={<Card/>}/>
        <Route path='/AddMovie' element={<AddMovie/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
      </Routes>
    </div>
    </Appstate.Provider>
  );
  
}

export default App;
export {Appstate}