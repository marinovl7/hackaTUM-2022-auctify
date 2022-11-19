import {
  CardActionArea,
  Card,
  CardMedia,
  CardContent,
  Typography,
  useTheme,
  Box
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import itemImg from '../../common/images/item.webp';

export default function ItemCard({ item }) {
  const router = useNavigate();
  const deadlineDate = new Date(Date.parse(item.deadline));
  const month = deadlineDate.getMonth();
  const day = deadlineDate.getDate();
  const dateFormat = `Auction ends at: ${day}/${month}`;
  const theme = useTheme();
  return (
    <Card
      sx={{
        maxWidth: 345,
        minHeight: 200,
        backgroundColor: '#075E82'
      }}
      onClick={() => {
        router(`/marketplace/${item._id}`);
      }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={itemImg}
          alt={item.name}
          sx={{ borderBottom: '2px solid #fff' }}
        />
        <CardContent
          sx={{
            display: 'flex !important',
            alignItems: 'start',
            justifyContent: 'start',
            flexDirection: 'column',
            minHeight: 200,
            height: '100%'
          }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ color: theme.palette.primary.main, justifySelf: 'end' }}>
            {item.name}
          </Typography>
          <Typography variant="body2" sx={{ color: theme.palette.primary.main }}>
            {item.description_summ}
          </Typography>
          <Box sx={{ mt: theme.spacing(4) }}>
            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
              Current Bid: {item.startingPrice}
            </Typography>
            <Typography variant="subtitle1" sx={{ color: theme.palette.primary.main }}>
              {dateFormat}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
