import React from 'react';
import { Box, Tab, Tabs, styled } from '@mui/material';

import { TabDefinitions } from '../../types/TabDefinition.type';

import { TabViewPanel } from './TabViewPanel';

interface TabViewProps {
  tabs: TabDefinitions;
  selectedTabIndex: number;
  onTabChange: (event: React.SyntheticEvent<Element, Event>, value: number) => void;
}

const ShepherdTabs = styled(Tabs)({
  '& .MuiTabs-indicator': {
    backgroundColor: 'var(--ha-A200)',
  },
  button: {
    color: 'var(--ha-S100-contrast)',
    '&.Mui-selected': {
      color: 'var(--ha-S100-contrast)',
      fontWeight: 700,
    },
  },
});

export const TabView: React.FC<TabViewProps> = props => {
  const { tabs, selectedTabIndex, onTabChange } = props;

  return (
    <Box className="tab-view" width="100%" height="100%" flexDirection="column" display="flex">
      <Box className="tab-wrapper">
        <ShepherdTabs value={selectedTabIndex} onChange={onTabChange} variant="fullWidth">
          {tabs.map((tab, index) => (
            <Tab key={tab.key} label={tab.label} tabIndex={index} />
          ))}
        </ShepherdTabs>
      </Box>

      <Box className="panel-wrapper" flex={1} display="flex">
        {tabs.map((tab, index) => (
          <TabViewPanel key={tab.key} index={index} selectedTabIndex={selectedTabIndex}>
            <tab.tabComponent />
          </TabViewPanel>
        ))}
      </Box>
    </Box>
  );
};
