import PropTypes from "prop-types";

export const OneOfSample = (props) => {
   const {color} = props;
    return (
        <div style={{color:"yellow", margin:"20px",padding:"20px",backgroundColor:"Red"}}>
            <h1>This is the component color which is being passed is {color}</h1>
        </div>
    );
}
OneOfSample.propTypes = {
    color:PropTypes.oneOf(["red","green","yellow"]).isRequired,
}
