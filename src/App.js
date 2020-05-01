import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useEffect, useState } from "react";
import Card from "./Components/Card/Card";
import {
  Row,
  Col,
  Container,
  Spinner,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from "reactstrap";
import axios from "axios";
import NavBar from "./Components/NavBar/NavBar";
import { FaSearch } from "react-icons/fa";

function App() {
  const data = [];
  // Initiating all the  states for the app component
  const [state, setstate] = useState(data); // data obtained from fetch request.
  const [isLoading, setIsLoading] = useState(true);
  const [searchText, setSearchText] = useState("");

  // Method to fetch data from the endpoint.
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
    fetchData ? setIsLoading(false) : setIsLoading(true);
    console.log("fetched Data : ", fetchData.data.response);
    setstate(fetchData.data.response);
  };

  // Side effects
  useEffect(() => {
    getCases();
  }, []);

  // Sort Countries by the count of cases in descending order
  state.sort((a, b) => b.cases.total - a.cases.total);
  const filteredCountries = state.filter((item) => {
    return item.country.toLowerCase().indexOf(searchText) !== -1;
  });

  // Filterring the countries specified in search bar.
  const filterCountries = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="App">
      <Container className="AppContainer">
        <NavBar />
        <Row>
          <Col md={{ size: "4", offset: "8" }}>
            <Form>
              <FormGroup>
                <InputGroup>
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <FaSearch />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    type="text"
                    name="search"
                    value={searchText}
                    onChange={(e) => filterCountries(e)}
                    placeholder="Search"
                  />
                </InputGroup>
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Row>
          {isLoading ? (
            <Col md={12}>
              <Spinner size='md' color="success" />
            </Col>
          ) : (
            filteredCountries.map((country, index) => {
              return (
                <Col key={index} xl={3} lg={3} md={4} sm={6} xs={12}>
                  <Card itemProps={country} />
                </Col>
              );
            })
          )}
        </Row>
      </Container>
    </div>
  );
}
export default App;
