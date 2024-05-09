import React from 'react';
import { CardBase, CardBaseProps, TimeCard } from '@hakit/components';
import { useEntity } from '@hakit/core';

export type DaySummaryCardProps = CardBaseProps<'div'>;

const DaySummaryCard: React.FC<DaySummaryCardProps> = props => {
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
      <h2>Weather</h2>
      <h2>What's on?</h2>
    </CardBase>
  );
};

export default DaySummaryCard;
