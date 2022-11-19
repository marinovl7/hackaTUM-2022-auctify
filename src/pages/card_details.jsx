import { Box, useTheme } from '@mui/material';
import CardDetailsLayout from '../components/CardDetails/CardDetailsLayout';

export default function CardDetails() {
  const theme = useTheme();
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: theme.palette.primary.dark }}>
      <CardDetailsLayout />
    </Box>
  );
}
