import React, { Component } from "react";
import Employees from "./Employees.js";
import Search from "./Search.js";
import "../styles/Directory.css";

class Directory extends Component {
  state = {
    employees: [],
    employeeSort: [],
    search: "",
    sorted: false,
  };

  // check that the component rendered at least once, and pull in our data
  // wait for the information to come back
  componentDidMount = () => {
    fetch(
      `https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,id,picture,dob`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ employees: json.results });
      });
  };

  // sort through employees based on search term
  // check if there is a match and set that to empSort for rendering
  sortEmployee = () => {
    let { employees, search } = this.state;
    let employeeSort = employees.filter((sorted) => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ employeeSort });
  };

  // grab search term, activate sorted
  startSort = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmployee();
      this.setState({ sorted: true });
    });
  };
}
