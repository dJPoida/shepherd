export type TabDefinition = {
  key: string;
  label: string;
  tabComponent: React.FC;
};

export type TabDefinitions = Array<TabDefinition>;
