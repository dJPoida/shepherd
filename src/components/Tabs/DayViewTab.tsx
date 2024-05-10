import React from 'react';
import { Row } from '@hakit/components';
import { DaySummaryCard } from '../DaySummaryCard/DaySummaryCard';
import { DayPersonCard } from '../DayPersonCard/DayPersonCard';

export const DayViewTab: React.FC = () => {
  return (
    <Row
      gap="1em"
      fullWidth
      justifyContent="stretch"
      alignItems="flex-start"
      style={{ padding: '1em' }}
    >
      <DaySummaryCard style={{ flex: 1 }} />
      <DayPersonCard name="Chicken" style={{ flex: 1 }} />
      <DayPersonCard name="Emily" style={{ flex: 1 }} />
    </Row>
  );
};
