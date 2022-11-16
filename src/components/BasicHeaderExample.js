import { Box, Typography } from '@mui/material';

export default function BasicHeaderExample() {
  return (
    <Box
      sx={(theme) => ({
        backgroundColor: theme.palette.primary.dark,
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      })}>
      <Box
        sx={(theme) => ({
          backgroundColor: theme.palette.primary.light,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          // its like the css padding: 2rem 4rem
          padding: theme.spacing(2, 4),
          // 2rem = 16px
          gap: theme.spacing(2),
          flexDirection: 'column',
          // 2.5rem = 20px
          borderRadius: theme.spacing(2.5)
        })}>
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.primary.main
          })}>
          Happy Hacking
        </Typography>
        <Typography
          variant="h3"
          sx={(theme) => ({
            color: theme.palette.primary.main
          })}>
          Lachezar,Nico,Andrea,Zhivomir
        </Typography>
      </Box>
    </Box>
  );
}
