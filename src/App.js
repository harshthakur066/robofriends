import React, { Component } from "react";
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
      searchfield1: "",
      searchfield2: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        this.setState({ robots: users });
      });
  }

  // onSearchChange = (event) => {
  // 	console.log(event.target.value )
  // 	this.setState({ searchfield1: event.target.value })
  // }
  onSearchChange1 = (event) => {
    console.log(event.target.value);
    this.setState({ searchfield1: event.target.value });
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      //console.log(robots)
      console.log(this.state.searchfeild1);
      //console.log(this.state.searchfeild2)
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield1.toLowerCase());
    });

    return (
      <div className="tc">
        <Header />
        <SearchBox searchChange1={this.onSearchChange1} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </div>
    );
  }
}

export default App;
