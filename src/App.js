import React from 'react';
import './App.css';
function App() {
  const axios = require("axios");
  let data = [];
axios({
    "method":"GET",
    "url":"https://covid-193.p.rapidapi.com/statistics",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"covid-193.p.rapidapi.com",
    "x-rapidapi-key":"554a0664a6mshd03eb0ca9f9d535p14f556jsn71a88dc87bed"
    }
    })
    .then((response)=>{
      console.log(response.data.response)
      data = response.data.response
    })
    .catch((error)=>{
      console.log(error)
    })
    const items = data.map(item => 
      {
        return <div>{item}</div>
      })
    console.log(items)
  return (
    <div className="App">
      <header className="App-header">
        <code>
          data
          {items}
        </code>
      </header>
    </div>
  );
}
export default App;
