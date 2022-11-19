import {
  AppBar,
  Box,
  Typography,
  IconButton,
  Toolbar,
  Button,
  useTheme,
  List,
  Divider,
  ListItemText,
  Drawer
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const navItems = ['Marketplace', 'Auth', 'Create Auction', 'Profile'];

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
        Auctify
      </Typography>
      <Divider sx={{ backgroundColor: theme.palette.primary.main }} />
      <List
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          flexDirection: 'column'
        }}>
        {navItems.map((item) => (
          <Button key={item}>
            <Link
              relative="path"
              to={`/${item.toLowerCase()}`}
              style={{
                textAlign: 'center',
                color: '#fff',
                textDecoration: 'none',
                fontSize: theme.spacing(2.5)
              }}
              key={item}>
              <ListItemText primary={item} />
            </Link>
          </Button>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <AppBar
        position="absolute"
        component="nav"
        sx={{ backgroundColor: 'transparent', boxShadow: 'none', zIndex: 9999 }}>
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
            Auctify
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'block' } }}>
            {navItems.map((item) => (
              <Button key={item}>
                <Link
                  relative="path"
                  to={`/${item.toLowerCase()}`}
                  style={{
                    textAlign: 'center',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: theme.spacing(2.5)
                  }}
                  key={item}>
                  <ListItemText primary={item} />
                </Link>
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
