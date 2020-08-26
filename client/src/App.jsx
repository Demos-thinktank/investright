import React, { useState, useEffect } from "react";
import axios from "axios";
// PAGES
// use react lazy + suspense
import Select from "./components/Select";
import Home from "./pages/Home";

let choices = [
  ["grapefruit", "Grapefruit"],
  ["lime", "Lime"],
  ["coconut", "Coconut"],
  ["mango", "Mango"],
];

function App() {
  const [exampleData, setExampleData] = useState("");
  useEffect(() => {
    axios
      .get("/api/example")
      .then((res) => {
        console.log(res, "res");
        setExampleData(res.data);
      })
      .catch(console.log);
  }, []);
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This page made a request to: {exampleData}</p>
      <Select
        values={choices}
        selected="lime"
        callback={(val) => console.log(val)}
      />
      <Home />
    </div>
  );
}

export default App;
