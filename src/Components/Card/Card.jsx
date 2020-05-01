import React from "react";
import "./Card.css";
import CountryChart from "../Charts/CountryChart";
function Card(props) {
  // getting the country by destructuring the props.
  const { itemProps } = props;
  // Cases
  const totalCases = itemProps.cases.total;
  const newCases = itemProps.cases.new;
  const activeCases = itemProps.cases.active;
  const recoveredCases = itemProps.cases.recovered;
  const criticalCases = itemProps.cases.critical;
  // Deaths
  const totalDeaths = itemProps.deaths.total;
  const newDeaths = itemProps.deaths.new;
  // Tests
  const totalTestsDone = itemProps.tests.total;
  return (
    <div className="card">
      <div className="cardTitle">
        <span>{itemProps.country}</span>
      </div>
      <div className="cardBody">
        <div>
          <span>Cases:</span>
          <span>{totalCases}</span>
        </div>
        <div>
          <span>Active Cases:</span>
          <span>{activeCases}</span>
        </div>
        <div>
          <span>Deaths:</span>
          <span>{totalDeaths}</span>
        </div>
        <div>
          <span>New Cases:</span>
          <span>{newCases ? newCases : '-'}</span>
        </div>
        <div>
          <span>New Deaths:</span>
          <span>{newDeaths ? newDeaths : '-'}</span>
        </div>
        <div>
          <span>Total Tests:</span>
          <span>{totalTestsDone ? totalTestsDone : '-'}</span>
        </div>
        <div className="Charts">
            <CountryChart 
                deaths = {totalDeaths}
                recovered = {recoveredCases}
                critical = {criticalCases} />
        </div>
      </div>
    </div>
  );
}

export default Card;
