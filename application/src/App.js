import React from 'react';
import './App.css';
import apiFetch from "./hooks/apiFetch";

import Button from "@material-ui/core/Button";

// Override styling on any material component in this file
import "./globalStyleOverride.css";
import { StylesProvider } from "@material-ui/core/styles";

export default function App() {

  const {state} = apiFetch();

  console.log("users", state.users.users)
  console.log("stocks", state.stocks.stocks)
  console.log("transacts", state.transactions.transactions)
  console.log("tutorials", state.tutorials.tutorials)
  console.log("news", state.news.allnews)

  
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
  )
}
