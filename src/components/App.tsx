import { SyntheticEvent, useState } from 'react';
import { TabView } from './TabView/TabView';
import { Column, ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';

import { HassLoading } from './HassLoading';

import { TABS } from '../constants/dashboard-tabs.const';

function App() {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  /**
   * Fired by the tab change event
   */
  const handleTabChange = (_event: SyntheticEvent<Element, Event>, value: number) => {
    setCurrentTabIndex(value);
  };

  return (
    <>
      <HassConnect hassUrl={import.meta.env.VITE_HA_URL} loading={<HassLoading />}>
        <ThemeProvider
          theme={{
            backgroundColor: 'purple',
          }}
        />
        <Column fullWidth fullHeight cssStyles={{ background: 'pink' }}>
          <TabView selectedTabIndex={currentTabIndex} onTabChange={handleTabChange} tabs={TABS} />
        </Column>
      </HassConnect>
    </>
  );
}

export default App;
