import React from 'react';
import { CardBase, CardBaseProps } from '@hakit/components';
import { Box, Typography } from '@mui/material';
import { TaskList } from '../TaskList/TaskList';

export type DayPersonCardProps = CardBaseProps<'div'> & {
  name: string;
};

export const DayPersonCard: React.FC<DayPersonCardProps> = props => {
  const { style, name, ...rest } = props;

  return (
    <CardBase
      {...rest}
      style={{ ...style, padding: '1em' }}
      disableActiveState
      disableRipples
      cssStyles={`
        &.card-base {
            &:hover {
              color: var(--ha-S200-contrast);  
              background-color: var(--ha-S300);
            }
          }`}
    >
      <Box width="100%" display={'flex'} justifyContent="space-evenly" alignItems="center">
        <Box
          className="avatar"
          component="img"
          src={`img/avatar_${name.toLowerCase()}.png`}
          alt="avatar"
          flex="1"
          maxWidth="20%"
          margin="0 1em 0 0"
        />
        <Box display="flex" flexDirection="column" justifyContent="flex-start" flex="1">
          <Typography variant="h1" flex="10">
            {name}
          </Typography>
          <Typography variant="subtitle1" flex="10" sx={{ color: 'var(--ha-S300-contrast)' }}>
            2 Events and 3 Tasks today
          </Typography>
        </Box>
      </Box>
      <TaskList />
    </CardBase>
  );
};
