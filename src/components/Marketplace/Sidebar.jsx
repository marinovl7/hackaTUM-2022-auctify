import { useTheme, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
import getFilteredItems from '../../common/api/filterItemsCategory';
import getAllItems from '../../common/api/getAllItems';

export default function Sidebar({ categories, setItems }) {
  const handleClick = async (e) => {
    const filterCriteria = e.target.innerHTML;
    let res;
    if (filterCriteria === 'All') {
      res = await getAllItems();
    } else {
      res = await getFilteredItems(filterCriteria);
    }
    setItems(res.data);
  };
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: 'absolute',
        display: 'flex',
        height: '100%',
        width: theme.spacing(24),
        flexDirection: 'column',
        gap: theme.spacing(2),
        bgcolor: theme.palette.primary.dark,
        color: theme.palette.primary.main
      }}>
      <List component="nav">
        {categories.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick={handleClick}>
              <ListItemText primary={text} sx={{ textAlign: 'center' }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
