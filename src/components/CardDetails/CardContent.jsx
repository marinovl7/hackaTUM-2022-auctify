import { Box, Typography, useTheme } from '@mui/material';

export default function CardContent() {
  const theme = useTheme();
  return (
    <Box sx={{ width: '100%', padding: theme.spacing(2) }}>
      <Typography variant="h2" sx={{ color: theme.palette.primary.main }}>
        Card Title
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
