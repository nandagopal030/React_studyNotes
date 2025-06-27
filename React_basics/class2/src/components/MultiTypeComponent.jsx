import PropTypes from "prop-types";

export const MultiTypeComponent = (props) => {
    return (
        <div>
            <h1>The value is {props.value}</h1>
        </div>

  )
}

MultiTypeComponent.propTypes = {
     value:PropTypes.oneOfType([PropTypes.string,PropTypes.number, PropTypes.bool]).isRequired,
}