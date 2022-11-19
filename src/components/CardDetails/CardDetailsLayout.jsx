import { useEffect } from 'react';
import { Box, useTheme } from '@mui/system';
import Navbar from '../Navbar/Navbar';
import ImageListDetails from './ImageList';
import { Grid } from '@mui/material';
import TransactionHistory from './TransactionHistory';
import CardContent from './CardContent';
import getSignleItem from '../../common/api/getSingleItem';
import { useParams } from 'react-router-dom';

export default function CardDetailsLayout() {
  const params = useParams();
  console.log(params);
  const getData = async () => {
    const res = await getSignleItem(params.productId);
    console.log(res);
  };

  useEffect(() => {
    getData();
    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);
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
