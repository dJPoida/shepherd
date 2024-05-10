import React from 'react';
import { CardBase, CardBaseProps } from '@hakit/components';
import { Box, Typography } from '@mui/material';

export type DayPersonCardProps = CardBaseProps<'div'> & {
  name: string;
};

export const DayPersonCard: React.FC<DayPersonCardProps> = props => {
  const { style, name, ...rest } = props;

  return (
    <CardBase disabled {...rest} style={{ ...style, padding: '1em' }}>
      <Box
        width="100%"
        height="100%"
        display={'flex'}
        justifyContent="space-evenly"
        alignItems="center"
      >
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
          <Typography variant="subtitle1" flex="10">
            1 Event and 2 Tasks today
          </Typography>
        </Box>
      </Box>
    </CardBase>
  );
};
