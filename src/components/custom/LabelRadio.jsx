import React from 'react';
import { Radio, FormControlLabel } from '@mui/material';

const LabelRadio = ({ label, value, onChange }) => {
  const handleChange = (event) => {
    onChange(event);
  }

  return (
    <FormControlLabel value={value} control={
      <Radio
        onChange={handleChange}
        value={value}
      />
    } label={label} />
  );
};

export default LabelRadio;
