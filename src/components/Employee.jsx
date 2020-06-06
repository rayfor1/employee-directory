import React from "react";
import "../styles/Employee.css";

const Employees = function (props) {
  return (
    <tr className="tr">
      <td>
        <img alt={props.firstName} src={props.icon} />
      </td>
      <td>
        {props.firstName} {props.lastName}
      </td>
      <td>{props.email}</td>
      <td>{props.phone} </td>
      <td>{props.dob}</td>
    </tr>
  );
};

export default Employees;
