import { TableRow, TableCell } from '@mui/material';

import type { GetJobsReponse } from 'api/getJobs/getJobs';

type JobRowsProps = {
  data: GetJobsReponse;
};

export const JobRows = ({ data }: JobRowsProps) => {
  return (
    <>
      {data.map((job) => {
        return (
          <TableRow key={job.title}>
            <TableCell>{job.companyName}</TableCell>
            <TableCell>{job.createdAt}</TableCell>
            <TableCell>{job.updatedAt}</TableCell>
            <TableCell>{job.longDescription}</TableCell>
            <TableCell>{job.shortDescription}</TableCell>
            <TableCell>{job.title}</TableCell>
            <TableCell>{job.status}</TableCell>
          </TableRow>
        );
      })}
    </>
  );
};
