import { Box, Typography, useTheme } from '@mui/material';

export default function CardContent() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: '100%',
        padding: theme.spacing(2),
        display: 'flex',
        alignItems: 'start',
        justifyContent: 'start',
        flexDirection: 'column'
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: theme.spacing(2)
        }}>
        <Box>
          <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
            Card Title
          </Typography>
        </Box>
        <Box
          sx={{
            padding: `8px 16px`,
            color: '#fff',
            backgroundColor: theme.palette.primary.light,
            borderRadius: '12px'
          }}>
          <Typography variant="body1">Category</Typography>
        </Box>
      </Box>
      <Typography variant="h6" sx={{ color: theme.palette.primary.main, ml: theme.spacing(1) }}>
        Seller
      </Typography>
      <Box sx={{ paddingTop: theme.spacing(2.5), color: theme.palette.primary.main }}>
        <Typography variant="body1">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus ducimus dolore quod
          iste voluptas tempora itaque quibusdam rerum, est blanditiis incidunt, laudantium facere
          saepe. Asperiores commodi temporibus reprehenderit laboriosam ea adipisci ex.
        </Typography>
      </Box>
    </Box>
  );
}
