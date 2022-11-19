import { Box, Typography, useTheme } from '@mui/material';
import marketplaceImg from '../../common/images/marketplace.webp';

export default function MarketplaceBanner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative',
        zIndex: theme.zIndex.drawer + 1,
        height: theme.spacing(35)
      }}>
      <img src={marketplaceImg} alt="" style={{ height: theme.spacing(35), width: '100vw' }} />;
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-60%)',
          color: theme.palette.primary.main,
          textAlign: 'center'
        }}>
        <Typography variant="h1" sx={{ fontWeight: '600' }}>
          Marketplace
        </Typography>
      </Box>
    </Box>
  );
}
