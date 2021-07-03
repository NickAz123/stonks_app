import { useState, useEffect } from "react";
const axios = require("axios");

export default function apiFetch() {
  //Creating State
  const [state, setState] = useState({
    users: [],
    stocks: []
  });

  //Initial Axios Call to API// All Tokens are hard coded for now
  useEffect(() => {
    Promise.all([
      axios.default.get(
        `https://finnhub.io/api/v1/stock/symbol?exchange=AS&token=c3fm17qad3if6rt4mr10`
      ),
      axios.default.get(
        `/api/users`
      ),
      axios.default.get(
        '/api/transactions'
      )
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        stocks: all[0].data,
        users: all[1].data,
        transactions: all[2].data
      }));
    });
  }, []);

  return { state, setState };
}
