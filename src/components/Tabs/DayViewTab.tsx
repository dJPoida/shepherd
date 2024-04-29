import React from 'react';
import { TimeCard } from '@hakit/components';

export const DayViewTab: React.FC = () => {
  return (
    <div>
      <h2>Today</h2>
      <p>The time below should be updating from home assistant every minute</p>
      <TimeCard />
    </div>
  );
};
