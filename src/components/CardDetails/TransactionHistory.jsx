import { Grid, Typography, useTheme } from '@mui/material';
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
    <>
      <Typography
        variant="h4"
        sx={{
          color: theme.palette.primary.main,
          textAlign: 'center',
          borderLeft: '2px solid #fff'
        }}>
        Bids
      </Typography>
      <Grid
        sx={{
          backgroundColor: theme.palette.primary.dark,
          borderLeft: '2px solid #fff',
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
    </>
  );
}
