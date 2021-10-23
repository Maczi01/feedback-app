import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Box, TextField, Theme } from '@material-ui/core';
import { Button, CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@material-ui/core/styles';
import Rating from '@mui/material/Rating';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import MainTemplate from '../templates/MainTemplate';
import editIcon from '../assets/editIcon.svg';
import { addFeedback as addItemAction } from '../actions/FeedbackActions';
import { Feedback } from '../reducers/FeedbackReducer';

interface Props {
    addItem: (feedback: Feedback) => void
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
    margin: '10px 50px',
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
  photo: {
    width: '180px',
    margin: '20px',
    padding: '10px',
  },
}));

const AddFeedbackPage: React.FC<Props> = ({ addItem }) => {
  const { register, handleSubmit, reset } = useForm<Feedback>();

  const [grade, setGrade] = useState<number | null>(0);
  const classes = useStyles();
  const onSubmit = handleSubmit((data: Feedback) => addItem({
    ...data, grade, date: (new Date()).toString(),
  }));

  return (
    <MainTemplate>
      <Box className={classes.form}>
        <Link to="/"> back</Link>
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
                value={grade}
                precision={0.5}
                onChange={(event, value) => {
                  setGrade(value);
                }}
              />
            </Box>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('title')} placeholder="title" className={classes.field} />
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <TextField {...register('description')} placeholder="description" className={classes.field} />
            <Button color="primary" variant="contained" className={classes.photo}>
              Add photo...
            </Button>
          </Box>

          <Box className={classes.buttons}>
            <Button
              color="primary"
              variant="contained"
              onClick={() => {
                reset();
                setGrade(0);
              }}
            >
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
