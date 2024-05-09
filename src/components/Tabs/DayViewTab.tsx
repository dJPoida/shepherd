import React from 'react';
import { CardBase, Row } from '@hakit/components';
import DaySummaryCard from '../DaySummaryCard/DaySummaryCard';

export const DayViewTab: React.FC = () => {
  return (
    <Row gap="1em" fullWidth justifyContent="stretch" style={{ padding: '1em' }}>
      <DaySummaryCard style={{ flex: 1 }}>
        <h2>Today</h2>
        <p>The time below should be updating from home assistant every minute</p>
      </DaySummaryCard>
      <CardBase style={{ flex: 1 }}>
        <h2>Madeleine</h2>
        <h3>What's On?</h3>
        <h3>Chores</h3>
      </CardBase>
      <CardBase style={{ flex: 1 }}>
        <h2>Emily</h2>
        <h3>What's On?</h3>
        <h3>Chores</h3>
      </CardBase>
    </Row>
  );
};
