import { Grid } from '@mui/material';
import ItemCard from './ItemCard';

export default function CardGrid() {
  return (
    <Grid container xs={12} spacing={2} alignItems="center" justifyContent="start" rowSpacing={6}>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
      <Grid item xs={4}>
        <ItemCard />
      </Grid>
    </Grid>
  );
}
