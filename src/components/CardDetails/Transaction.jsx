import { Box, Grid, Typography, useTheme } from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GavelIcon from '@mui/icons-material/Gavel';

export default function Transaction({ username, bid }) {
  const theme = useTheme();
  return (
    <>
      <Grid
        container
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        sx={{ padding: theme.spacing(2) }}>
        <Grid item xs={12}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <AccountCircleIcon size="medium" sx={{ color: '#fff' }} />
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                {username}
              </Typography>
            </Box>
            <Box
              sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <GavelIcon size="medium" sx={{ color: '#fff' }} />
              <Typography variant="h6" sx={{ color: theme.palette.primary.main, fontWeight: 600 }}>
                {bid}
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
