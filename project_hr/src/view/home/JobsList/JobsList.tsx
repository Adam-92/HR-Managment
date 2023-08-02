/* eslint-disable */
import { Fragment } from 'react';
import { ListItem } from './ListItem';
import type { JobsListProps } from './JobsList.types';

export const JobsList = ({ list }: JobsListProps) => {
  return (
    <>
      {list?.map((listItem, index) => {
        return (
          <Fragment key={index}>
            <ListItem
              listItem={listItem}
              renderList={(listItem) => <JobsList list={listItem.subList} />}
            />
          </Fragment>
        );
      })}
    </>
  );
};
