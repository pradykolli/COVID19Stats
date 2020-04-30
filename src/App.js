import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import { Row, Col, Container, Spinner } from "reactstrap";
import axios from 'axios'
import NavBar from "./Components/NavBar/NavBar";

function App() {
  
  const data = [];
  const [state, setstate] = useState(data);
  const [isLoading, setIsLoading] = useState(true)
  const getCases = async () => {
    let fetchData = await axios({
      method: "GET",
      url: "https://covid-193.p.rapidapi.com/statistics",
      headers: {
        "content-type": "application/octet-stream",
        "x-rapidapi-host": "covid-193.p.rapidapi.com",
        "x-rapidapi-key": "554a0664a6mshd03eb0ca9f9d535p14f556jsn71a88dc87bed",
      },
    });
    fetchData ? setIsLoading(false) : setIsLoading(true)
    console.log("fetched Data : ", fetchData.data.response);
    setstate(fetchData.data.response);
  };
  useEffect(() => {
    getCases();
  },[]);
  state.sort((a,b) => b.cases.total - a.cases.total)
  const countries = state.map((country, index) => {
    return (
        <Col key={index} md={4}>
          <Card itemProps={country} />
        </Col>
    );
  });


  return (
    <div className="App">
      <Container className="AppContainer">
        <NavBar />
        <Row>
          {
            isLoading 
            ? <Spinner  size="md" color="secondary" />
            :countries
          }  
        </Row>  
      </Container>  
          
          
        

    </div>
  );
}
export default App;
