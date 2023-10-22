import { TableBody, TableRow, TableCell } from '@mui/material';

import { CheckboxRow } from 'components/Table/CheckboxRow/CheckboxRow';
import type { GetJobsReponse } from 'api/getJobs/getJobs';
import { useTable } from 'providers/table/useTable';

type JobRowsProps = {
  data: GetJobsReponse;
};

export const JobRows = ({ data }: JobRowsProps) => {
  const { search, pagination } = useTable();

  const searchedData = search.searchData();
  const { startIndex, endIndex } = pagination.cutSelectedRangeOfData();

  const renderData = searchedData ?? data;
  return (
    <TableBody>
      {renderData
        .map((job) => {
          return (
            <TableRow key={job.title}>
              <CheckboxRow id={job.id} />
              <TableCell>{job.companyName}</TableCell>
              <TableCell>{job.createdAt}</TableCell>
              <TableCell>{job.logo}</TableCell>
              <TableCell>{job.longDescription}</TableCell>
              <TableCell>{job.shortDescription}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{job.updatedAt}</TableCell>
            </TableRow>
          );
        })
        .slice(startIndex, endIndex)}
    </TableBody>
  );
};
