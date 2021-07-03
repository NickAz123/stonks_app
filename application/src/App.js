import React from 'react';
import axios from 'axios';
import './App.css';

import Button from "@material-ui/core/Button";

// Override styling on any material component in this file
import "./globalStyleOverride.css";
import { StylesProvider } from "@material-ui/core/styles";

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
    // All child components will inherit styling defined in globalStyleOverride.css
      <StylesProvider injectFirst>
        <div className="App">
          <h1>Hi There!</h1>
            <Button variant={"contained"} onClick={fetchData} >
              Fetch Data
            </Button>        
        </div>
      </StylesProvider>
  );
}
