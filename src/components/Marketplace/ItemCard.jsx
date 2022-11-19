import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Grid
} from '@mui/material';
import itemImg from '../../common/images/item.webp';

export default function ItemCard() {
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: '#075E82'
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={itemImg}
          alt="green iguana"
          sx={{ borderBottom: '2px solid #fff' }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.main }}>
            Cupboard
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
          <Grid
            container
            sx={{ color: theme.palette.primary.main, mt: theme.spacing(1) }}
            spacing={2}>
            <Grid item xs={4}>
              <Typography variant="subtitle1">Current Bid:</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                $80.00
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
