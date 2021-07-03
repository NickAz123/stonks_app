import React from 'react';
import './App.css';
import apiFetch from "./hooks/apiFetch";

export default function App() {

  const {state} = apiFetch();

  console.log(state.users)
  console.log(state.stocks)
  console.log(state.transactions)

  return (
    <div className="App">
      <h1>Hi There!</h1>
     </div>
  );
  
}
