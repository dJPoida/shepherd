import { ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import Dashboard from './Dashboard';
import HassLoading from './HassLoading';

function App() {
  return (
    <>
      <HassConnect hassUrl={import.meta.env.VITE_HA_URL} loading={<HassLoading />}>
        <ThemeProvider />
        <Dashboard />
      </HassConnect>
    </>
  );
}

export default App;
