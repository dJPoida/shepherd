import { Column, TimeCard } from '@hakit/components';
import { useHass } from '@hakit/core';
import { Box, Tab, Tabs } from '@mui/material';
import { SyntheticEvent, useState } from 'react';

function Dashboard() {
  const { getAllEntities } = useHass();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  /**
   * Fired by the tab change event
   */
  const handleTabChange = (_event: SyntheticEvent<Element, Event>, value: number) => {
    setCurrentTabIndex(value);
  };

  /**
   * Tab panel component
   */
  const TabPanel = (props: {
    children: React.ReactNode;
    index: number;
    selectedTabIndex: number;
  }) => {
    const { children, selectedTabIndex, index } = props;

    return selectedTabIndex === index ? <Box>{children}</Box> : <></>;
  };

  return (
    <Column fullWidth fullHeight>
      <Box>
        <Tabs value={currentTabIndex} onChange={handleTabChange}>
          <Tab label="Time" />
          <Tab label="HA Entities" />
          <Tab label="Calendar Test" />
        </Tabs>
      </Box>

      <Box flex={1}>
        {/* Time Card */}
        <TabPanel selectedTabIndex={currentTabIndex} index={0}>
          <div>
            <h2>Time Card</h2>
            <p>The time below should be updating from home assistant every minute</p>
            <TimeCard />
          </div>
        </TabPanel>

        {/* Entities List */}
        <TabPanel selectedTabIndex={currentTabIndex} index={1}>
          <p>
            You have <b>{Object.keys(getAllEntities()).length}</b> entities to start automating
            with! Have fun!
          </p>
        </TabPanel>

        {/* Calendar Test */}
        <TabPanel selectedTabIndex={currentTabIndex} index={2}>
          <p>This is a test for the calendar component</p>
        </TabPanel>
      </Box>
    </Column>
  );
}

export default Dashboard;
