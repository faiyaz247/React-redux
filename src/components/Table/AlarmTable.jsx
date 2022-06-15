import React, { memo} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Card,
  Typography,
} from '@material-ui/core';
import { PropTypes } from 'prop-types';
import { Heading } from '.';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const column = ['Sno', 'Time'];

 const AlarmTable =  memo(({ data }) => {
  const classes = useStyles();
  const employeeData = data && data.length && data.map(({
    Time, Sno,
  }) => ({
    Time, Sno,
  }));

  return (
    <TableContainer component={Card}>
      <Table className={classes.table} aria-label="simple table">
        <Heading column={column} />
        <TableBody>
          {employeeData && employeeData.length ? employeeData.map((row) => (
            <TableRow key={`${row.Time}`}>
              <TableCell component="th" scope="row">
                {row.Sno}
              </TableCell>
              <TableCell align="right">{row.Time}</TableCell>
            </TableRow>
          )) : <Typography variant="h5" gutterBottom>No Alarm set ! </Typography>}
        </TableBody>
      </Table>
    </TableContainer>
  );
})

AlarmTable.propTypes = {
  data: PropTypes.array.isRequired,
};

export default AlarmTable;
