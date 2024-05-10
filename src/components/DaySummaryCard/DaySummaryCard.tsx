import React from 'react';
import { CardBase, CardBaseProps, TimeCard } from '@hakit/components';
import { useEntity } from '@hakit/core';
import { Typography } from '@mui/material';

export type DaySummaryCardProps = CardBaseProps<'div'>;

export const DaySummaryCard: React.FC<DaySummaryCardProps> = props => {
  const { style, ...rest } = props;

  const dateSensor = useEntity('sensor.date', {
    returnNullIfNotFound: true,
  });

  const timeSensor = useEntity('sensor.time', {
    returnNullIfNotFound: true,
  });

  if (!dateSensor || !timeSensor) {
    throw new Error('Could not find date or time sensor entities');
  }

  return (
    <CardBase disabled {...rest} style={{ ...style, padding: '1em' }}>
      <TimeCard onlyFunctionality />
      <Typography variant="h1">Weather</Typography>
      <Typography variant="h1">What's on?</Typography>
    </CardBase>
  );
};
