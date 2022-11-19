import { Grid } from '@mui/material';
import ItemCard from './ItemCard';

export default function CardGrid({ items }) {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="start" rowSpacing={6}>
      {items.map((item) => {
        return (
          <Grid key={item.name} item xs={12} md={6} lg={4}>
            <ItemCard item={item} />
          </Grid>
        );
      })}
    </Grid>
  );
}
