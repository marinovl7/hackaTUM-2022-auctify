import { useTheme, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';

export default function Sidebar() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        height: '100%',
        width: theme.spacing(30),
        display: 'flex',
        flexDirection: 'column',
        gap: theme.spacing(2),
        bgcolor: theme.palette.primary.dark,
        color: theme.palette.primary.main
      }}>
      <List component="nav">
        {['Bedroom', 'Bathroom', 'Living Room', 'Tech'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
