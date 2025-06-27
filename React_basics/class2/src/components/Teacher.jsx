
import PropTypes from 'prop-types';

export const Teacher = (props) => {
  return (
    <>
    <div className='teacher'>
         <table >
        <tbody>
            <tr>
                <td>First Name :</td>
                <td>{props.firstname}</td>
            </tr>
            <tr>
                <td>Last Name :</td>
                <td>{props.lastname}</td>
            </tr>
            <tr>
                <td>Age :</td>
                <td>{props.age}</td>
            </tr>
            <tr>
                <td>Roll No :</td>
                <td>{props.rollno}</td>
            </tr>
        </tbody>
    </table>
    </div>
    </>
  )
}

Teacher.propTypes = {
  firstname: PropTypes.string,
  lastname: PropTypes.string,
  age: PropTypes.number,
  rollno: PropTypes.number,
};
Teacher.defaultProps = {
  firstname: "A",
  lastname: "B",
  age: 0,
  rollno: 0,
    
}