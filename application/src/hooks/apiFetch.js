import { useState, useEffect } from "react";
const axios = require("axios");

export default function apiFetch() {

  //Creating State
  const[state, setState] = useState({
    symbols:[],
    stocks:[]
  });

  //Initial Axios Call to API
  useEffect(() => {

    // const webSocket = new Websocket

    Promise.all([
      axios.default.get(`https://finnhub.io/api/v1/stock/symbol?exchange=AS&token=c3fm17qad3if6rt4mr10`)
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        symbols: all[0].data
      }));
    });
  }, [])

  return {state, setState}
}