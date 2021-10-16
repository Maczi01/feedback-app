import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Theme } from '@material-ui/core';
import { Button, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@mui/material/Rating';
import MainTemplate from '../templates/MainTemplate';
import editIcon from '../assets/editIcon.svg';

const useStyles = makeStyles((theme: Theme) => ({
  form: {
    padding: '20px',
    margin: '50px',
    backgroundColor: theme.palette.text.secondary,
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: '20px',
    margin: '50px',
    borderRadius: '10px',
  },
  field: {
    margin: '20px',
    padding: '10px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
  },
}));

const AddFeedbackPage: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const [stars, setStars] = useState<number | null>(0);
  const [result, setResult] = useState('');
  const classes = useStyles();
  const grade = 3;
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <MainTemplate>
      <Box className={classes.form}>
        <Box display="flex" flexDirection="row">
          <img src={editIcon} alt="logo" />
          <Typography>
            Add your feedback
          </Typography>
        </Box>
        <form onSubmit={onSubmit}>
          <Box className={classes.root}>
            <Box className={classes.field}>
              <Typography>
                Your grade:
              </Typography>
              <Rating
                name="simple-controlled"
                value={stars}
                precision={0.5}
                onChange={(event, newValue) => {
                  setStars(newValue);
                }}
              />
            </Box>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('product')} placeholder="product name" className={classes.field} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('title')} placeholder="title" className={classes.field} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('feedback')} placeholder="description" className={classes.field} multiline />
          </Box>

          <Box className={classes.buttons}>
            <Button color="primary" variant="contained">
              Clear form
            </Button>
            <Button color="secondary" variant="contained">
              Cancel
            </Button>
            <Button color="primary" type="submit" variant="contained">
              Submit
            </Button>
          </Box>
        </form>
      </Box>
    </MainTemplate>
  );
};

export default AddFeedbackPage;
