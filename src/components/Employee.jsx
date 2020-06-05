import React from "react";
import "../styles/Employees.css";

const Employees = (props) => {
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
    </tr>
  );
};

export default Employees;
