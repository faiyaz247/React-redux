import  styled from 'styled-components';
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "10ch",
    },
  },
}));


export const ClockWrapper = styled.div`
    background-color: #66ffff;
    width: 35%;
    margin: auto;
    padding-top: 30px;
    padding-bottom: 30px;
    font-family: 'Open Sans Condensed', sans-serif;
    font-size: 64px;
    text-align: center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`