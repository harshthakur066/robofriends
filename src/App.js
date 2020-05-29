import React, { Component } from "react";
import axios from "axios";

import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import Header from "./components/Header";
import "./App.css";

const robots = [];
class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }

  async componentDidMount() {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ robots: users.data });
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      // console.log(robots);
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange1={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
