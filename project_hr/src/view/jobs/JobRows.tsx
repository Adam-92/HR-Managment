import { TableBody, TableRow, TableCell } from '@mui/material';

import { Checkbox } from 'components/Table/Checkbox';
import type { GetJobsReponse } from 'api/getJobs/getJobs';
import { useTable } from 'context/Table/useTable';

type JobRowsProps = {
  data: GetJobsReponse;
};

export const JobRows = ({ data }: JobRowsProps) => {
  const { cutSelectedRangeOfData } = useTable();

  const { startIndex, endIndex } = cutSelectedRangeOfData();

  return (
    <TableBody>
      {data
        .map((job) => {
          return (
            <TableRow key={job.title}>
              <Checkbox id={job.id} />
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
