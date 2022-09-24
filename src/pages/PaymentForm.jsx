import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { RadioGroup, FormLabel, TextField, Box, Collapse } from '@mui/material';
import LabelRadio from '../components/custom/LabelRadio';

export default function PaymentForm() {
  const [selectedValue, setSelectedValue] = React.useState('rice');

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Payment method
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <FormLabel>Foods</FormLabel>
          <RadioGroup defaultValue="rice" row>
            <LabelRadio label="Rice" value="rice" onChange={handleChange} />
            <LabelRadio label="Bread" value="bread" onChange={handleChange} />
          </RadioGroup>

          <Collapse in={selectedValue === 'rice'} sx={{ mb: 1 }}>
            <Box>
              <FormLabel>Description</FormLabel>
            </Box>
            <TextField label="Title" size="small" sx={{ mt: 1}} fullWidth required />
            <TextField label="Description" size="small" sx={{ mt: 1.5}} multiline rows={4} fullWidth required />
          </Collapse>
          
          <Box sx={{ mb: 1 }}>
            <FormLabel>Why do you love it?</FormLabel>
          </Box>
          <TextField label="Reason" size="small" fullWidth error={selectedValue === 'rice'} helperText={selectedValue === 'rice' && 'You have to choose bread.'} />

        </Grid>
      </Grid>
    </React.Fragment>
  );
}