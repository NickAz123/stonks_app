import React from 'react';
import axios from 'axios';
import './App.css';
import apiFetch from "./hooks/apiFetch";

export default function App() {

  const {state} = apiFetch();

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {

      console.log(response.data) // The entire response from the local API
      console.log(state.symbols) // symbols response from Finnhub
      
    }) 
  }

  return (
    <div className="App">
      <h1>Hi There!</h1>
      <button onClick={fetchData} >
        Fetch Data
      </button>        
     </div>
  );
  
}
