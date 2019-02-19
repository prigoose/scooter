/**
* 
* ConditionalRender
* @description Render a component only when a condition is satisfied
* Use Case: Decluttering component render methods with repeated logic
*
**/

import React from 'react';
import T from 'prop-types';

const ConditionalRender = ({ component, shouldRender, ...props }) => {
  if (shouldRender) {
    const Component = component;
    return <Component {...props}/>;
  }
  return null;
};

ConditionalRender.propTypes = {
  component: T.oneOfType([T.func, T.element, T.object]).isRequired,
  shouldRender: T.bool,
};

export default ConditionalRender;