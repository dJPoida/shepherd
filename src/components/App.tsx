import { SyntheticEvent, useState } from 'react';
import { TabView } from './TabView/TabView';
import { ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import { ErrorBoundary } from 'react-error-boundary';

import { HassLoading } from './HassLoading';

import { TABS } from '../constants/dashboard-tabs.const';
import { ErrorFallback } from './ErrorFallback/ErrorFallback';

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
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HassConnect hassUrl={import.meta.env.VITE_HA_URL} loading={<HassLoading />}>
          <ThemeProvider
            theme={{
              backgroundColor: 'purple',
            }}
          />
          <TabView selectedTabIndex={currentTabIndex} onTabChange={handleTabChange} tabs={TABS} />
        </HassConnect>
      </ErrorBoundary>
    </>
  );
}

export default App;
