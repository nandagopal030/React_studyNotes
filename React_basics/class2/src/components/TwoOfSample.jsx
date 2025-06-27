import PropTypes from "prop-types";

export const TwoOfSample = (props) => {
    const {color} = props;
  return (
    <div style={{color:"blueviolet", margin:"20px", padding: "40px", backgroundColor:color}}>
     <h1>THis is a h1 elemnet where this kinda proptype is being used {color}</h1>
    </div> 
  )
}
TwoOfSample.propTypes = {
    color:PropTypes.oneOf(["red", "green", "blue"]),
}
