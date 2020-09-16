import React from "react";
import "../styles/Employee.css";
import Moment from "moment";

const Employees = (props) => {

  let fixedDate = Moment(props.dob).format("LL");

  return (

    <tr className="tr">
      <td><img alt={props.firstName} src={props.icon} /></td>
      <td>{props.firstName} {props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.phone} </td>
      <td>{fixedDate}</td>
    </tr>

  )

}

export default Employees;
