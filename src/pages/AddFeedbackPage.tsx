import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Theme } from '@material-ui/core';
import { Button, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@mui/material/Rating';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import MainTemplate from '../templates/MainTemplate';
import editIcon from '../assets/editIcon.svg';
import { addItem as addItemAction } from '../actions/FeedbackActions';
import { Feedback } from '../reducers/FeedbackReducer';

interface Props {
    addItem: any
}

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

const AddFeedbackPage: React.FC<Props> = ({ addItem }) => {
  const { register, handleSubmit } = useForm();

  const [stars, setStars] = useState<number | null>(0);
  const feedbackToAdd = {
    id: 4,
    title: 'new feedback',
    description: 'new feedback description',
    productId: 2,
    userId: 1,
    date: '09.02.2019',
    grade: 4,
  };
  const classes = useStyles();
  const onSubmit = handleSubmit(() => addItem(feedbackToAdd));

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
            <TextField {...register('id')} placeholder="product name" className={classes.field} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('title')} placeholder="title" className={classes.field} />
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addItem: (feedback: Feedback) => dispatch(addItemAction(feedback)),
});
export default connect(null, mapDispatchToProps)(AddFeedbackPage);
