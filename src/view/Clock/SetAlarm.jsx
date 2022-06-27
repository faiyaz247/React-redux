import React from "react";
import { TextField, Button } from "@material-ui/core";
import { useStyles} from './style';


export default function SetAlarm({ alarm, handleInput, setAlarms }) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="filled-number"
          label="Hours"
          name="hour"
          type="number"
          InputProps={{ inputProps: { min: "0", max: "24", step: "1" } }}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={alarm.hour}
          onChange={handleInput}
        />
        <TextField
          id="filled-number"
          label="Minutes"
          type="number"
          name="minute"
          InputProps={{ inputProps: { min: "0", max: "60", step: "1" } }}
          InputLabelProps={{
            shrink: true,
          }}
          value={alarm.minute}
          variant="filled"
          onChange={handleInput}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={() => setAlarms(alarm)}
          disabled={alarm.hour === 0 && alarm.minute === 0}
        >
          Set
        </Button>
      </div>
    </form>
  );
}
