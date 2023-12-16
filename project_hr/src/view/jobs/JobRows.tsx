import { TableBody, TableRow, TableCell, ListItemIcon } from '@mui/material';
import { EditNote, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import type { Job } from 'types/types';
import { useDeleteJob } from 'api/job/deleteJob/useDeleteJob';
import { CheckboxRow } from 'components/Table/CheckboxRow/CheckboxRow';
import type { GetJobsReponse } from 'api/jobs/getJobs/getJobs';
import { useTable } from 'providers/table/useTable';
import { formatDate } from 'utils/formatDate';

type JobRowsProps = {
  data: GetJobsReponse;
};

export const JobRows = ({ data }: JobRowsProps) => {
  const { search, pagination } = useTable();
  const { handleDeleteJob } = useDeleteJob();

  const renderData = search.value ? search.debouncedData : data;

  const { startIndex, endIndex } = pagination.cutSelectedRangeOfData();

  return (
    <TableBody>
      {renderData
        .map((job: Job) => {
          return (
            <TableRow key={job.id}>
              <CheckboxRow id={job.id} />
              <TableCell>{job.companyName}</TableCell>
              <TableCell>{formatDate(job.createdAt)}</TableCell>
              <TableCell>{job.logo}</TableCell>
              <TableCell>{job.longDescription}</TableCell>
              <TableCell>{job.shortDescription}</TableCell>
              <TableCell>{job.status}</TableCell>
              <TableCell>{job.title}</TableCell>
              <TableCell>{formatDate(job.updatedAt)}</TableCell>
              <TableCell>
                <Link to={job.id}>
                  <ListItemIcon sx={{ cursor: 'pointer' }}>
                    <EditNote />
                  </ListItemIcon>
                </Link>
                <ListItemIcon sx={{ cursor: 'pointer' }}>
                  <Delete onClick={() => handleDeleteJob(job)} />
                </ListItemIcon>
              </TableCell>
            </TableRow>
          );
        })
        .slice(startIndex, endIndex)}
    </TableBody>
  );
};
