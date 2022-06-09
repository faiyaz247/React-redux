/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container, Typography, TextField, Button,
} from '@material-ui/core';
import MuiPhoneNumber from 'material-ui-phone-number';
import { useNavigate } from 'react-router-dom';

const Form = ({
  buttonName,
  type,
  onSubmit,
  employeeData = {},
}) => {
  const [name, setName] = useState(employeeData.name || '');
  const [department, setDepartment] = useState(employeeData.department || '');
  const [employeeId, setEmployeeId] = useState(employeeData.employeeId || '');
  const [mobileNumber, setMobileNumber] = useState(employeeData.mobileNumber || null);
  const [experience, setExperience] = useState(employeeData.experience || null);

  const navigate = useNavigate();

  const handleClick = () => {
    if (name && department && employeeId && mobileNumber && experience) {
      const employeeDetails = {
        name, department, employeeId, mobileNumber, experience,
      };
      onSubmit(employeeDetails);
      navigate('/');
    }
  };

  return (
    <Container maxWidth="sm">
      <br />
      <br />
      <Typography variant="h4">{type}</Typography>
      <br />
      <br />
      <TextField
        id="outlined-full-width"
        label="Name"
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ margin: 8 }}
        placeholder="Enter name"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Department"
        fullWidth
        value={department}
        style={{ margin: 8 }}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Enter department"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <TextField
        id="outlined-full-width"
        label="Employee id"
        fullWidth
        value={employeeId}
        style={{ margin: 8 }}
        onChange={(e) => setEmployeeId(e.target.value)}
        placeholder="Enter employee id"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
      />
      <MuiPhoneNumber
        label="Mobile Number"
        data-cy="user-phone"
        variant="outlined"
        fullWidth
        style={{ margin: 8 }}
        defaultCountry="in"
        value={mobileNumber}
        onChange={(value) => setMobileNumber(value)}
      />
      <TextField
        id="outlined-full-width"
        label="Experience"
        fullWidth
        type="number"
        style={{ margin: 8 }}
        onChange={(e) => setExperience(e.target.value)}
        placeholder="Year of experience"
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
        variant="outlined"
        value={experience}
      />
      <Button
        align="right"
        variant="contained"
        color="primary"
        style={{ marginTop: 8, float: 'right' }}
        onClick={() => handleClick()}
      >
        {buttonName}
      </Button>
      <Button
        align="right"
        variant="contained"
        onClick={() => navigate('/')}
        color="primary"
        style={{ marginTop: 8, marginLeft: '60%' }}
      >
        Cancel
      </Button>
    </Container>
  );
};

Form.defaultProps = {
  onSubmit: () => {},
  type: 'Employee form',
};

Form.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string,
  employeeId: PropTypes.string,
  mobileNumber: PropTypes.string,
  experience: PropTypes.string,
  buttonName: PropTypes.string,
  onSubmit: PropTypes.func,
  employeeData: PropTypes.object,
};

export default Form;
