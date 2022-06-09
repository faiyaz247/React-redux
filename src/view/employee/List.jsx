import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import Table from '../../components/Table';
import { deleteEmployeeAction } from '../../redux';

const List = memo(({ name }) => {
  const employee = useSelector(state => state.employeeReducer.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleDelete = (id) => {
    dispatch(deleteEmployeeAction(id));
    navigate('/');
  };

  const items = [
    {
      label: 'Edit',
      onClick: (id) => navigate(`/employee/edit/${id}`,
        { state: { employeeDetails: employee.filter((_, index) => index === id), id } }),
    },
    {
      label: 'Delete',
      onClick: (id) => handleDelete(id),
    },
  ];

  return (
    <>
      <h1>{name}</h1>
      <h2>{`Total Employees: ${employee.length}`}</h2>
      <Button
        variant="contained"
        color="primary"
        onClick={() => navigate('/employee/add')}
        style={{ marginBottom: 10, float: 'right' }}
      >
         Add
      </Button>
      <Table menuItems={items} data={employee} />
    </>
  );
});

List.propTypes = {
  name: PropTypes.string.isRequired,
};

export default List;
