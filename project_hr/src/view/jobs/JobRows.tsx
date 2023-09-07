import { TableBody, TableRow, TableCell, Checkbox } from '@mui/material';

import type { GetJobsReponse } from 'api/getJobs/getJobs';
import { type ControlCheckboxes } from 'components/Table/Table';

type JobRowsProps = {
  data: GetJobsReponse;
  controlCheckboxes: ControlCheckboxes;
};

export const JobRows = ({ data, controlCheckboxes }: JobRowsProps) => {
  return (
    <TableBody>
      {data.map((job) => {
        return (
          <TableRow key={job.title}>
            <TableCell padding="checkbox">
              <Checkbox checked={controlCheckboxes.isAllCheckboxesSet} />
            </TableCell>
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
    </TableBody>
  );
};
