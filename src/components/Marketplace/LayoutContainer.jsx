import { Box, useTheme } from '@mui/material';
import CardGrid from './CardGrid';

export default function LayoutContainer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        ml: theme.spacing(24),
        minHeight: '100%',
        padding: theme.spacing(4),
        backgroundColor: '#05182F'
      }}>
      <CardGrid />
    </Box>
  );
}
