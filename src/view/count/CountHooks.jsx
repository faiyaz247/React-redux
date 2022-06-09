import React, { memo, useCallback } from 'react';
import PropTypes from 'prop-types';
// import { employeeListAction } from './actions';
// import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { ADD_COUNT } from '../../redux';

const CountHooks = memo((props) => {
  const { heading } = props;
  const { count = 1 } = useSelector(state => state.addCountReducer);
  const dispatch = useDispatch();

  const onClick = useCallback(
    () => dispatch({ type: ADD_COUNT }), [dispatch],
  );

  return (
    <div>
      {heading}
      <p>{`count is ${count}`}</p>
      <Button onClick={() => onClick()}>increase count</Button>
    </div>
  );
});

CountHooks.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default CountHooks;
