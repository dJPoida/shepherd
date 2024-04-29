import React from 'react';
import { Box } from '@mui/material';

export const TabViewPanel = (props: {
  children: React.ReactNode;
  index: number;
  selectedTabIndex: number;
}) => {
  const { children, selectedTabIndex, index } = props;

  if (selectedTabIndex !== index) return <></>;

  return <Box>{children}</Box>;
};
