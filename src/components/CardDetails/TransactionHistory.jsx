import { Grid, Typography, useTheme, Box, Button } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import Transaction from './Transaction';

const transactions = [
  { username: 'Idiot Idiot', bid: '20$' },
  { username: 'Idiot Idiot', bid: '20$' },
  { username: 'Idiot Idiot', bid: '20$' },
  { username: 'Idiot Idiot', bid: '20$' }
];

export default function TransactionHistory() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        mb: theme.spacing(6)
      }}>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          textAlign: 'center'
        }}>
        Bids
      </Typography>
      <Grid
        sx={{
          backgroundColor: theme.palette.primary.dark,
          height: '100%'
        }}
        container
        alignItems="center"
        justifyContent="start"
        flexDirection="column">
        {transactions.map((transaction) => {
          return (
            <Transaction key={transaction} username={transaction.username} bid={transaction.bid} />
          );
        })}
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#D345FF',
          color: theme.palette.primary.main,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
        <GavelIcon size="medium" sx={{ color: '#fff' }} />
        <Typography variant="body1">Bid $24.00</Typography>
      </Button>
    </Box>
  );
}
