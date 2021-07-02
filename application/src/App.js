import React from 'react';
import axios from 'axios';
import './App.css';

export default function App() {

  const fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
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
