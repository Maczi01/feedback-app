import React from 'react';
import {
  Box, Button, CardMedia, TextField, Theme,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ombre from '../assets/ombre.svg';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    padding: '20px',
    margin: '50px',
    backgroundColor: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    margin: '10px 50px',
    borderRadius: '10px',
    width: '400px',
  },
  textField: {
    margin: '20px',
    padding: '10px',
    border: '1px solid',
    borderColor: theme.palette.text.primary,
    borderRadius: '5px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  photo: {
    width: '180px',
    margin: '20px',
    padding: '10px',
  },
  media: {
    height: '100%',
  },
}));

const LoginPage: React.FC = () => {
  const classes = useStyles();

  return (
    <>
      <form>
        <Box className={classes.root}>
          <TextField
            label=""
            id="filled-size-small"
            defaultValue="Small"
            variant="standard"
            className={classes.textField}
          />

          <TextField
            label=""
            id="filled-size-small"
            defaultValue="Small"
            variant="standard"
            className={classes.textField}
          />

          <TextField
            label=""
            id="filled-size-small"
            defaultValue="Small"
            variant="standard"
            className={classes.textField}
          />

          <Button> Log in</Button>
        </Box>
      </form>
      <Box className={classes.root}>
        <Button color="secondary" variant="contained">
          Create account
        </Button>
        <Button color="secondary" variant="contained">
          Forgot password
        </Button>
      </Box>
    </>
  );
};
export default LoginPage;
