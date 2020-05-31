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

  onRequestRobots = async () => {
    const users = await axios.get("https://jsonplaceholder.typicode.com/users");
    this.setState({ robots: users.data });
  };

  async componentDidMount() {
    this.onRequestRobots();
  }

  onSearchChange = (event) => {
    // console.log(event.target.value);
    this.setState({ searchfield: event.target.value });
  };

  filterRobots = () => {
    const { robots, searchfield } = this.state;
    return robots.filter((robots) => {
      // console.log(robots);
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
  };

  render() {
    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange1={this.onSearchChange} />
        <Scroll>
          <CardList robots={this.filterRobots()} />
        </Scroll>
      </div>
    );
  }
}

export default App;
