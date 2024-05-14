import { SyntheticEvent, useState } from 'react';
import { TabView } from './TabView/TabView';
import { ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as HaKitThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import { ErrorBoundary } from 'react-error-boundary';

import { HassLoading } from './HassLoading';

import { TABS } from '../constants/dashboard-tabs.const';
import { ErrorFallback } from './ErrorFallback/ErrorFallback';
import { theme } from '../theme/theme';

export const App = () => {
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
        {/* TODO: Figure out how to replace this dynamically when the app is loaded from outside the LAN */}
        <HassConnect hassUrl={import.meta.env.VITE_HA_URL} loading={<HassLoading />}>
          <HaKitThemeProvider />
          <MuiThemeProvider theme={theme}>
            <TabView selectedTabIndex={currentTabIndex} onTabChange={handleTabChange} tabs={TABS} />
          </MuiThemeProvider>
        </HassConnect>
      </ErrorBoundary>
    </>
  );
};
