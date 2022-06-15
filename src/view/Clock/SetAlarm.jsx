import React from 'react';
import {TextField, Button} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '10ch',
        },
    },
}));

export default function SetAlarm({alarm, setTime, setAlarms}) {
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
                    onChange={setTime}
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
                    onChange={setTime}
                />
                <Button  variant="contained" color="primary" onClick={() => setAlarms(alarm)} disabled={alarm.hour ===0 && alarm.minute ===0}>
                    Set
                </Button>
            </div>
        </form>
    );
}
