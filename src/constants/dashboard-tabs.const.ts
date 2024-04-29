import { TabDefinitions } from '../types/TabDefinition.type';
import TabComponents from '../components/Tabs/_TabComponents';

export const TABS: TabDefinitions = [
  { label: 'Today', key: 'today', tabComponent: TabComponents.DayViewTab },
  { label: 'Week', key: 'week', tabComponent: TabComponents.WeekViewTab },
  { label: 'Music', key: 'music', tabComponent: TabComponents.MusicTab },
];
