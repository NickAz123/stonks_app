import React from 'react';
import './App.css';
import apiFetch from "./hooks/apiFetch";

export default function App() {

  const {state} = apiFetch();

  console.log("users", state.users.users)
  console.log("stocks", state.stocks.stocks)
  console.log("transacts", state.transactions.transactions)
  console.log("tutorials", state.tutorials.tutorials)
  console.log("news", state.news.allnews)

  return (
    <div className="App">
      <h1>Hi There!</h1>
     </div>
  );
  
}
