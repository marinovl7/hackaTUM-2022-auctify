import * as React from 'react';

import { Box, useTheme } from '@mui/system';
import Navbar from '../Navbar/Navbar';
import ImageListDetails from './ImageList';
import { Grid } from '@mui/material';
import TransactionHistory from './TransactionHistory';
import CardContent from './CardContent';

export default function CardDetailsLayout() {
  const theme = useTheme();
  return (
    <Box>
      <Navbar />
      <Grid
        container
        xs={12}
        sx={{ paddingTop: theme.spacing(12), paddingLeft: theme.spacing(12) }}>
        <Grid item xs={9} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImageListDetails />
        </Grid>
        <Grid item xs={3}>
          <TransactionHistory />
        </Grid>
        <Grid
          item
          xs={9}
          sx={{
            paddingLeft: theme.spacing(12)
          }}>
          <CardContent />
        </Grid>
      </Grid>
    </Box>
  );
}
