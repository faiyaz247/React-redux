import React, { memo } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { editEmployeeAction } from '../../redux';
import Form from './components';

const Edit = memo(() => {
  const location = useLocation();
  const dispatch = useDispatch();

  return (
    <div>
      <Form
        onSubmit={(updatedEmployeeDetail) => dispatch(editEmployeeAction(location.state.id,
          updatedEmployeeDetail))}
        employeeData={location.state.employeeDetails[0]}
        buttonName="Update"
        type="Edit Employee Detail"
      />
    </div>
  );
});

export default Edit;
