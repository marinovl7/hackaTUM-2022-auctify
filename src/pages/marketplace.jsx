import { Box } from '@mui/material';
import MarketplaceBanner from '../components/Marketplace/MarketplaceBanner';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Marketplace/Sidebar';
import LayoutContainer from '../components/Marketplace/LayoutContainer';
import { themeOptions } from '../common/theme';

export default function Marketplace() {
  return (
    <>
      <Navbar />
      <MarketplaceBanner />
      <Box sx={{ backgroundColor: themeOptions.palette.primary.dark }}>
        <Sidebar />
        <LayoutContainer />
      </Box>
    </>
  );
}
