// import React from "react";
import PropTypes from "prop-types";

export const Students = (props) => {
  return (
    <div className="students">
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{props.name}</td>
          </tr>
          <tr>
            <td>Age</td>
            <td>{props.age}</td>
          </tr>
          <tr>
            <td>Is Married</td>
            <td>{props.ismarried ? "Yes" : "No"}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};


Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  ismarried: PropTypes.bool,
};

Students.defaultProps = {
  name: "No name",
  age: 0,
  ismarried: false, // 
};