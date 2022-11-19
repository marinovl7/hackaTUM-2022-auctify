import { Grid, Typography, useTheme, Box, Button } from '@mui/material';
import GavelIcon from '@mui/icons-material/Gavel';
import Transaction from './Transaction';
import { useState } from 'react';

export default function TransactionHistory() {
  const transactions = [
    { username: 'Andrea Racheta', bid: 10.0 },
    { username: 'Nicolas Moro', bid: 15.0 },
    { username: 'Lachezar Marinov', bid: 20.0 },
    { username: 'Zhivomir Grozev', bid: 25.0 }
  ];
  const [transactionsArray, setTransactions] = useState(transactions);
  const [step, setStep] = useState(transactions[transactions.length - 1].bid);
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
        {transactionsArray.map((transaction) => {
          return (
            <Transaction key={transaction} username={transaction.username} bid={transaction.bid} />
          );
        })}
      </Grid>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#40B7A0',
          color: theme.palette.primary.main,
          borderRadius: '12px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
        onClick={() => {
          setTransactions([...transactions, { username: 'Sami Mattarino', bid: step + 5.0 }]);
          setStep((prev) => prev + 5);
        }}>
        <GavelIcon size="medium" sx={{ color: '#fff' }} />
        <Typography variant="body1">Bid ${step + 5.0}</Typography>
      </Button>
    </Box>
  );
}
