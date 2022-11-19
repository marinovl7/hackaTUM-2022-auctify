import { Box, Button, Typography, useTheme } from '@mui/material';
import homeImg from '../common/images/homeimg.webp';

export default function Banner() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'relative'
      }}>
      <img src={homeImg} alt="" style={{ height: '100vh', width: '100vw' }} />;
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-60%)',
          color: theme.palette.primary.main,
          textAlign: 'center',
          minWidth: theme.spacing(38),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
        <Typography variant="h1" sx={{ fontWeight: '600', mb: theme.spacing(2) }}>
          hAuction
        </Typography>
        <Typography variant="h4" sx={{ paddingLeft: theme.spacing(1), mb: theme.spacing(2) }}>
          Place your household items at auction and receive more value for your old stuff
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: '#D345FF',
            color: theme.palette.primary.main,
            borderRadius: '12px',
            width: theme.spacing(14)
          }}>
          Sign up
        </Button>
      </Box>
    </Box>
  );
}
