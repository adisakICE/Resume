import React, { useEffect } from 'react'
import Header from './Components/Header'
import Table from './Components/Table'
import { useDispatch } from "react-redux"
import * as dataAction from './Redux/Action/Data'
import axios from 'axios'
const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    async function getData() {
      await axios.get('http://130.211.230.68:3000/api/storeItem')
        .then(res => {
          const data = res.data;
         
          dispatch(dataAction.reducer_data(data))
        })
    }
    getData()
  });
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Table />
      </header>
    </div>
  );
}

export default App;
