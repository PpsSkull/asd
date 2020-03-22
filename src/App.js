import React, { Component } from "react";
import Page from "./page.js";
import "./styles.css";
import Button from "react-bootstrap/Button";
import resp from "./api.json";

class App extends Component {
  state = {
    trxs: []
  };

  makeApiCall = () => {
    var fetchUrl = `http://starlord.hackerearth.com/bankAccount`;
    fetch(fetchUrl).then(response => {
      if (!response.ok) {
        console.log("Error in fetch");
      }
      console.log(response);
      this.setState({ trxs: response });
      return response.json();
    });
  };
  makeLocalApiCall = () => {
    var fetchUrl = `./api.json`;
    fetch(fetchUrl)
      .then(response => {
        console.log(response.json());
        if (!response.ok) {
          console.log("Error in fetch");
        }
        return response.json();
      })
      .then(data => {
        console.log(data);

        // this.setState(trxs: data);
      });
  };
  makeLocalApiCall1 = () => {
    // this.setState(trxs: data);
    console.log(resp);
    this.setState({ trxs: resp.data });
  };

  handleFetch = () => {
    this.makeApiCall();
  };

  showData = () => {
    console.log(this.state.trxs);
  };

  render() {
    console.log(this.state.trxs);
    return (
      <div className="App">
        <div>
          <h1>StarLord Bankings</h1>
        </div>
        <h2>Account And Transaction Details</h2>
        <Button onClick={this.makeLocalApiCall1} variant="light">
          Fetch
        </Button>
        <div className="container pagec">
          <Page trx={this.state.trxs} />
        </div>
      </div>
    );
  }
}
export default App;
