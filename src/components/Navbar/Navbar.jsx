import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
  useTheme,
  ListItem,
  List,
  ListItemButton,
  Divider,
  ListItemText,
  Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const navItems = ['Marketplace', 'Login', 'Create Auction', 'Profile'];

export default function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: 'center',
        backgroundColor: theme.palette.primary.dark,
        color: theme.palette.primary.main
      }}>
      <Typography variant="h5" sx={{ my: 2 }}>
        hAuction
      </Typography>
      <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar component="nav" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <IconButton
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              mr: 2,
              display: { md: 'none' },
              color: theme.palette.primary.main
            }}>
            <MenuIcon sx={{ fontSize: theme.spacing(5) }} />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'block' },
              color: theme.palette.background.default
            }}>
            hAuction
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item} sx={{ color: '#fff', fontSize: theme.spacing(2.5) }}>
                {item}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: theme.spacing(30),
              backgroundColor: theme.palette.primary.dark
            }
          }}>
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
