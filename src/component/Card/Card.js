import PropTypes from 'prop-types';
import React from 'react';

const Card = ({ className, style, children }) => (
  <div className={'card ' + className} style={{ ...style }}>
    {children}
  </div>
);

Card.propTypes = {
  className: PropTypes.string.isRequired,
  style: PropTypes.any.isRequired,
  children: PropTypes.node,
};

export default Card;
