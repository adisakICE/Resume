
import React, {  useEffect } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import About from './Components/About'
import Resume from './Components/Resume'
import Contact from './Components/Contact'
import Example from './Components/Example'
import axios from 'axios'
import { useDispatch } from "react-redux"
import * as userAction from './Redux/Action/User'
const TAG = "App = "
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    async function  getDataUser () {
    await axios.get('http://130.211.230.68:1880/mockup/users')
      .then(res => {
        const persons = res.data;
        console.log(TAG,persons)
        dispatch(userAction.reducer_user(persons))
      })
  }
  getDataUser()
  });

 
  return (
    <div className="App">
        <Header/>
        <About/>
        <Resume/> 
        <Example/>
        <Contact/>
        <Footer/>
    </div>
  );
}

export default App;
