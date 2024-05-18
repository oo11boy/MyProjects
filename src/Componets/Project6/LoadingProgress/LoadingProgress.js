import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

export default function  LoadingProgress() {
  return (
    <Stack style={{zIndex:999}} sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
      <LinearProgress style={{zIndex:999}} color="inherit" />
   
    </Stack>
  );
}
