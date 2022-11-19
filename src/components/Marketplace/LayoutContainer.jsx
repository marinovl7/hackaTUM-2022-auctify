import { Box, useTheme } from '@mui/material';
import getAllProducts from '../../common/api/getAllItems';
import { useState } from 'react';
import CardGrid from './CardGrid';
import Sidebar from './Sidebar';
import { useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function LayoutContainer() {
  const getData = async () => {
    const res = await getAllProducts();

    const uniq = [
      ...new Set(
        res.data.map((item) => {
          return item.category;
        })
      )
    ];
    uniq.unshift('All');
    setCategories(uniq);
    setItems(res.data);
  };

  useEffect(() => {
    getData();
    return () => {
      console.log('This will be logged on unmount');
    };
  }, []);
  const theme = useTheme();
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([]);
  const isLoading = items.length === 0 ? true : false;
  return (
    <>
      <Box sx={{ backgroundColor: theme.palette.primary.dark }}>
        <Sidebar setItems={setItems} categories={categories} items={items} />
        <Box
          sx={{
            ml: theme.spacing(24),
            minHeight: '100%',
            padding: theme.spacing(4),
            backgroundColor: '#05182F'
          }}>
          <CardGrid items={items} />
        </Box>
      </Box>
      {isLoading && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: theme.spacing(5),
            height: theme.spacing(5),
            color: theme.palette.primary.dark,
            ml: theme.spacing(90)
          }}>
          <CircularProgress sx={{ zIndex: 9999, backgroundColor: theme.palette.primary.light }} />
        </Box>
      )}
    </>
  );
}
