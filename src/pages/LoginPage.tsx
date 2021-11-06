import React from 'react';
import { Button, TextField } from '@material-ui/core';

const LoginPage: React.FC = () => (
  <>
    <form>
      <TextField placeholder="title" />
      <TextField placeholder="title" />
      <TextField placeholder="title" />

      <Button> Log in</Button>
    </form>
    <Button> Create account</Button>
    <Button> Forgot password</Button>
  </>
);

export default LoginPage;
