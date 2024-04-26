import { Column, TimeCard } from '@hakit/components';
import { useHass } from '@hakit/core';
import { Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

function Dashboard() {
  const { getAllEntities } = useHass();

  const [tab, setTab] = useState(0);

  const handleTabChange = (event: SyntheticEvent<Element, Event>, value: number) => {
    setTab(value);
  };

  return (
    <Column fullWidth fullHeight justifyContent='flexStart'>
      <h2>DASHBOARD</h2>
      <Tabs value={tab} onChange={handleTabChange}>
        <Tab label='Time' />
        <Tab label='HA Entities' />
        <Tab label='Calendar Test' />
      </Tabs>
      {tab === 0 && (
        <div>
          <p>The time below should be updating from home assistant every minute</p>
          <TimeCard />
        </div>
      )}
      {tab === 1 && (
        <p>
          You have <b>{Object.keys(getAllEntities()).length}</b> entities to start automating with! Have fun!
        </p>
      )}
      {tab === 2 && <p>This is a test for the calendar component</p>}
    </Column>
  );
}

export default Dashboard;
