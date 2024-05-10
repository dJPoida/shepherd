import { SyntheticEvent, useState } from 'react';
import CacheBuster from 'react-cache-buster';
import { TabView } from './TabView/TabView';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material';
import { ThemeProvider as HaKitThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import { ErrorBoundary } from 'react-error-boundary';

import { HassLoading } from './HassLoading';

import { TABS } from '../constants/dashboard-tabs.const';
import { ErrorFallback } from './ErrorFallback/ErrorFallback';

import { version } from '../../package.json';

export const App = () => {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  /**
   * Fired by the tab change event
   */
  const handleTabChange = (_event: SyntheticEvent<Element, Event>, value: number) => {
    setCurrentTabIndex(value);
  };

  const theme = createTheme({
    typography: {
      h1: {
        fontSize: '2rem',
      },
      h2: {
        fontSize: '1.75rem',
      },
      h3: {
        fontSize: '1.5rem',
      },
      // Add more overrides as needed
    },
  });

  return (
    <CacheBuster
      currentVersion={version}
      isEnabled={true}
      isVerboseMode={false} //If true, the library writes verbose logs to console.
      loadingComponent={<HassLoading />}
      metaFileDirectory={'./'}
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <HassConnect hassUrl={import.meta.env.VITE_HA_URL} loading={<HassLoading />}>
          <HaKitThemeProvider />
          <MuiThemeProvider theme={theme}>
            <TabView selectedTabIndex={currentTabIndex} onTabChange={handleTabChange} tabs={TABS} />
          </MuiThemeProvider>
        </HassConnect>
      </ErrorBoundary>
    </CacheBuster>
  );
};
