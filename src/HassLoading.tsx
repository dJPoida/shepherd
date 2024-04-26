import { useIcon } from '@hakit/core';
import { Box, Typography } from '@mui/material';
import React from 'react';

/**
 * This component is displayed by the HassConnect component when the
 * connection to Home Assistant is loading.
 *
 * This is displayed before the Theme Provider is available,
 * so there are some hard-coded styles which isn't ideal.
 */
const HassLoading: React.FC = () => {
  const icon = useIcon('mdi:loading');

  return (
    <Box
      className="hass-loading"
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
    >
      <Box
        sx={{
          fontSize: '1rem',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
          backgroundColor: '#1F2C4B',
          borderRadius: '0.5rem',
          color: '#B7C4E4',
          padding: '2rem',
        }}
        justifyContent="center"
        alignItems="center"
        display="flex"
      >
        <Box className="spin" sx={{ marginRight: '1em' }}>
          {icon}
        </Box>
        <Typography>Loading...</Typography>
      </Box>
    </Box>
  );
};

export default HassLoading;
