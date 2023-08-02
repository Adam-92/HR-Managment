export type JobsListProps = {
  list?: ListItem[];
};

export type ListItem = {
  name: string;
  subList?: ListItem[];
};

export type ListItemProps = {
  listItem: ListItem;
  renderList: (listItem: ListItem) => JSX.Element;
};

export type ItemProps = {
  name: string;
};
