import React from 'react';
import { Box } from '@mui/material';

export const TabViewPanel = (props: {
  children: React.ReactNode;
  index: number;
  selectedTabIndex: number;
}) => {
  const { children, selectedTabIndex, index } = props;

  if (selectedTabIndex !== index) return <></>;

  return (
    <Box className="tab-view-panel" display="flex" alignItems="flex-start" flex="1">
      {children}
    </Box>
  );
};
