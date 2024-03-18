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
import { formatDate } from 'utils/formatDate';

type JobRowsProps = {
  data: Job[];
};

export const JobRows = ({ data }: JobRowsProps) => {
  const { search } = useTable();
  const { handleDeleteJob } = useDeleteJob();

  const notFoundSearchedData = search.value && data.length === 0;

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
            <TableCell>{job.title}</TableCell>
            <TableCell>{job.companyName}</TableCell>
            <TableCell>{formatDate(job.createdAt)}</TableCell>
            <TableCell>{formatDate(job.updatedAt)}</TableCell>
            <TableCell>{job.status}</TableCell>
            <TableCell>{job.shortDescription}</TableCell>
            <TableCell>{job.longDescription}</TableCell>
            <TableCell align="center">
              <Link to={job.id} className="cursor">
                <ListItemIcon>
                  <EditNote />
                </ListItemIcon>
              </Link>
              <ListItemIcon className="cursor">
                <Delete onClick={() => handleDeleteJob(job)} />
              </ListItemIcon>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
