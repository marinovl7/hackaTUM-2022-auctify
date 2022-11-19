import { useEffect } from 'react';
import { Box, useTheme, useMediaQuery, Grid } from '@mui/material';
import Navbar from '../Navbar/Navbar';
import ImageListDetails from './ImageList';
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
  const matches = useMediaQuery('(max-width:450px');
  return (
    <Box>
      <Navbar />
      <Grid
        item
        xs={12}
        sx={{
          paddingTop: theme.spacing(12),
          paddingLeft: matches ? theme.spacing(4) : theme.spacing(12)
        }}>
        <CardContent />
      </Grid>
      <Grid
        container
        xs={12}
        sx={{
          paddingLeft: matches ? theme.spacing(4) : theme.spacing(12)
        }}>
        <Grid
          item
          lg={9}
          md={12}
          sm={12}
          xs={12}
          alignItems="center"
          justifyContent="center"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ImageListDetails />
        </Grid>
        <Grid item lg={3} md={12} sm={12} xs={12}>
          <TransactionHistory />
        </Grid>
      </Grid>
    </Box>
  );
}
