import { Grid } from '@mui/material';
import ItemCard from './ItemCard';

export default function CardGrid() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="start" rowSpacing={6}>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <ItemCard />
      </Grid>
    </Grid>
  );
}
