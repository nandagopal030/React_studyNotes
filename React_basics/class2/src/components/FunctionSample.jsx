
import PropTypes from "prop-types";
export const FunctionSample = (props) => {
    const {handleClick} = props;
  return (
    <div>
        This is from funtion sample side
        <br />
        <button onClick={handleClick}>click me faster</button>
    </div>
  )
}
FunctionSample.propTypes = {
   onClick:PropTypes.func.isRequired
}