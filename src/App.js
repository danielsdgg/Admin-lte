import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import Home from './components/Home';
import NewProperty from './components/property/AddProperty';
import { Routes, Route } from 'react-router-dom';
import UpdateProperty from './components/property/UpdateProperty';
import PropertyList from './components/property/PropertyList';
import React, {useState, useEffect} from 'react';
import Login from './components/users/Login';

function App() {
  const [property, setProperty] = useState([])
  const [user, setUser] = useState([])
  useEffect(() => {
    const fetching = async () => {
      const response = await fetch("http://127.0.0.1:5000/properties")
      const data = await response.json()
      return setProperty(data)

    }
    fetching()
  },[])

  const getuser = (email) => {
    fetch(`http://127.0.0.1:5000/users/${email}`)
    .then(res => res.json())
    .then(data => setUser(data))
  }

  
  return (
    <div className="App">
      <Header/>     
      <NavBar email = {user.email} />
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path='/addproperties' element = {<NewProperty />}></Route>
        <Route path='/updateproperty/:id' element = {<UpdateProperty />}></Route>
        <Route path='/properties' element = {<PropertyList property = {property}/>}></Route>
        <Route path='/login' element = {<Login getuser={getuser}/>}></Route>
      </Routes>
      <Footer/>
      

    </div>
  );
}

export default App;
