import React, { ReactElement, useMemo } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import Checkbox from '@mui/material/Checkbox';
import { Box, Typography } from '@mui/material';
import { TransitionGroup } from 'react-transition-group';
import { PendingActions, Task, Verified } from '@mui/icons-material';

export type Task = { id: number; name: string; completed: boolean };

export const TaskList: React.FC = () => {
  const [tasks, setTasks] = React.useState<Array<Task>>([
    { id: 1, name: 'Make Bed', completed: false },
    { id: 2, name: 'Piano Practice', completed: false },
    { id: 3, name: 'Clean Toilet', completed: false },
    { id: 4, name: 'Feed Dogs', completed: false },
  ]);

  const completedTasks = useMemo(() => tasks.filter(task => task.completed === true), [tasks]);
  const remainingTasks = useMemo(() => tasks.filter(task => task.completed === false), [tasks]);

  const handleToggle = (task: Task) => () => {
    setTasks(prevTasks =>
      prevTasks.map(t => {
        if (t.id === task.id) {
          return { ...t, completed: !t.completed };
        }
        return t;
      })
    );
  };

  const TaskListItem = ({ task }: { task: Task }) => {
    const labelId = `checkbox-list-label-${task.id}`;

    return (
      <ListItem key={task.id} disablePadding sx={{ color: 'var(--ha-S400-contrast)' }}>
        <ListItemButton role={undefined} onClick={handleToggle(task)} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              checked={task.completed}
              tabIndex={-1}
              disableRipple
              inputProps={{ 'aria-labelledby': labelId }}
            />
          </ListItemIcon>
          <ListItemText id={labelId} primary={task.name} />
        </ListItemButton>
      </ListItem>
    );
  };

  const HeaderListItem = ({
    id,
    name,
    icon,
    color,
  }: {
    id: string;
    name: string;
    icon: ReactElement;
    color: string;
  }) => {
    return (
      <ListItem key={name} disablePadding sx={{ marginTop: '1rem', marginBottom: '1rem', color }}>
        <ListItemIcon sx={{ minWidth: 'unset', marginRight: '1rem' }}>{icon}</ListItemIcon>
        <ListItemText
          id={`separator-${id}`}
          primary={
            <Typography variant="h4">
              <span>{name}</span>
            </Typography>
          }
        />
      </ListItem>
    );
  };

  return (
    <Box flex={1} display="flex" flexDirection="column">
      <List sx={{ width: '100%' }}>
        <TransitionGroup>
          {/* Remaining Tasks */}
          {remainingTasks.length > 0 && (
            <Collapse key="collapse-heading-remaining">
              <HeaderListItem
                id="remaining"
                name="Tasks Remaining"
                icon={<PendingActions sx={{ color: 'var(--ha-alert-warning-color) !important' }} />}
                color="var(--ha-alert-warning-color)"
              />
            </Collapse>
          )}
          {remainingTasks.map(task => (
            <Collapse key={`${task.id}-remaining`}>
              <TaskListItem task={task} />
            </Collapse>
          ))}
          {completedTasks.length > 0 && (
            <Collapse key="collapse-heading-completed">
              <HeaderListItem
                id="completed"
                name="Tasks Completed"
                icon={<Verified sx={{ color: 'var(--ha-alert-success-color)  !important' }} />}
                color="var(--ha-alert-success-color)"
              />
            </Collapse>
          )}
          {completedTasks.map(task => (
            <Collapse key={`${task.id}-completed`}>
              <TaskListItem task={task} />
            </Collapse>
          ))}
        </TransitionGroup>
      </List>
    </Box>
  );
};
