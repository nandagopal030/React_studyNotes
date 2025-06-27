import PropTypes from 'prop-types';

export const Child2 = (props) => {
  return (
    <div>{props.children}</div>
  );
};

Child2.propTypes = {
  children: PropTypes.node, 
};
