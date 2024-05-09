import React from 'react';
import { Box, Typography, Button } from '@mui/material';

export type ErrorFallbackProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export const ErrorFallback: React.FC<ErrorFallbackProps> = ({ error }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        backgroundColor: '#f5f5f5',
        borderRadius: '10px',
        boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
      }}
    >
      <Typography variant="h6" component="h2" color="error">
        Something went wrong:
      </Typography>
      <Typography
        variant="body1"
        component="pre"
        sx={{ overflowWrap: 'break-word', margin: '1em' }}
      >
        {error.message}
      </Typography>
      <Button variant="contained" color="primary" onClick={() => window.location.reload()}>
        Try again
      </Button>
      <Typography
        variant="body2"
        component="code"
        sx={{ fontFamily: 'monospace', margin: '2em 0' }}
      >
        {(error.stack ?? '').split('\n').map((line, index) => (
          <React.Fragment key={index}>
            <span>{line}</span>
            <br />
          </React.Fragment>
        ))}
      </Typography>
    </Box>
  );
};
