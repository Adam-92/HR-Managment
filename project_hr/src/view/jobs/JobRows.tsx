import {
  TableBody,
  TableRow,
  TableCell,
  ListItemIcon,
  Alert,
} from '@mui/material';
import { EditNote, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import type { Job } from 'types/types';
import { useTable } from 'providers/table/useTable';
import { useDeleteJob } from 'api/job/deleteJob/useDeleteJob';
import { CheckboxRow } from 'components/Table/CheckboxRow/CheckboxRow';
import type { GetJobsReponse } from 'api/jobs/getJobs/getJobs';
import { formatDate } from 'utils/formatDate';

type JobRowsProps = {
  data: GetJobsReponse;
};

export const JobRows = ({ data }: JobRowsProps) => {
  const { search } = useTable();
  const { handleDeleteJob } = useDeleteJob();

  const notFoundSearchedData =
    search.value && search.searchedResults.length === 0;

  if (notFoundSearchedData) {
    return (
      <TableBody>
        <TableRow>
          <TableCell colSpan={10} align="center">
            <Alert severity="info">No results found</Alert>
          </TableCell>
        </TableRow>
      </TableBody>
    );
  }

  return (
    <TableBody>
      {data.map((job: Job) => {
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
      })}
    </TableBody>
  );
};
