import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export default function AddressForm() {
  // eslint-disable-next-line no-unused-vars
  const [userData, setUserData] = useState({
    username: '',
    country: ''
  });

  const onChange = (event) => {
    setUserData({ [event.target.name]: event.target.value });
    console.log( event.target.value );
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            required
            id="username"
            name="username"
            label="Username"
            fullWidth
            variant="standard"
            onChange={onChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            variant="standard"
            onChange={onChange}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}