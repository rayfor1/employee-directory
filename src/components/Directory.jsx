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

  render = () => {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Employee Directory</h2>
          <p>
            Hello, I've created this employee directory that will allow us to
            search for any and all of our co-workers and quickly find
            information about them.
          </p>
          <p>
            {" "}
            Please use the app to search below by name or by e-mail to pull up
            who you are looking for and any information we have about them.
          </p>
          <Search name="search" startSort={this.startSort} label="Search" />
        </div>

        <div className="container">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Picture</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Phone</th>
                <th>Birthdate</th>
              </tr>
            </thead>
            <tbody>
              {/* if it's not sorted, map accordingly */}
              {!this.state.sorted
                ? this.state.employees.map((employee) => (
                    <Employees
                      key={employee.id.value}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.medium}
                      dob={employee.dob.date}
                    />
                  ))
                : // otherwise map the sorted employees
                  this.state.employeeSort.map((employee) => (
                    <Employees
                      key={employee.id.value}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.medium}
                      dob={employee.dob.date}
                    />
                  ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default Directory;
