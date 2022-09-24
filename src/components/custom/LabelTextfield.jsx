import React from 'react';
import { Grid, Typography, TextField } from '@mui/material';

const LabelTextfield = ({ label, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  }

  return (
    <Grid container>
      <Grid item>
        <Typography variant="h5" component="span">
          {label}
        </Typography>
      </Grid>
      <Grid item>
        <TextField variant="outlined" onChange={handleChange} size="small" fullWidth />
      </Grid>
    </Grid>
  );
};

export default LabelTextfield;
