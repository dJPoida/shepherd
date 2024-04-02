import { ThemeProvider } from '@hakit/components';
import { HassConnect } from '@hakit/core';
import Dashboard from './Dashboard';

function App() {
  console.log(import.meta.env.VITE_HA_URL);
  return (
    <>
      <HassConnect hassUrl={import.meta.env.VITE_HA_URL}>
        <ThemeProvider includeThemeControls />
        <Dashboard />
      </HassConnect>
    </>
  );
}

export default App;
