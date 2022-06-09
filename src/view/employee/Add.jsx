import React, { memo } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components';
import { addEmployeeAction } from '../../redux';

const Add = memo(() => {
  const dispatch = useDispatch();

  return (
    <div>
      <Form onSubmit={(newEmployee) => dispatch(addEmployeeAction(newEmployee))} buttonName="Add" type="Add Employee Detail" />
    </div>
  );
});

export default Add;
