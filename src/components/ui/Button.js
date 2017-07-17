import React from 'react';
import PropTypes from 'prop-types';

import '../style/Button.css';

const Button = ({ primary, secondary, children, ...otherProps }) => {
  const classNames = ['Button'];

  // Parametre olarak props alınsaydı bu şekilde yazılacaktı:
  //   const { primary, secondary, children, ...otherProps} = props;

  if (primary) {
    classNames.push('Button--primary');
  }

  if (secondary) {
    classNames.push('Button-secondary');
  }

  return (
    <button className={classNames.join(' ')} {...otherProps}>
      {children}
    </button>
  );
};

Button.defaultProps = {
  primary: true,
  secondary: false,
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
};

export default Button;
