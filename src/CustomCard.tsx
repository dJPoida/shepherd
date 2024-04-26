import { Box } from '@mui/material';
import React from 'react';

interface CardProps {
  title?: string;
  children?: React.ReactNode;
}

const CustomCard: React.FC<CardProps> = ({ title, children }) => {
  return (
    <Box
      className="card"
      sx={{
        backgroundColor: 'var(--ha-S400)',
        borderRadius: '0.5rem',
        color: 'var(--ha-S400-contrast)',
        padding: '2rem',
      }}
    >
      {title && <h2>{title}</h2>}
      <Box>{children}</Box>
    </Box>
  );
};

export default CustomCard;
