import { TableBody, TableRow, TableCell, ListItemIcon } from '@mui/material';
import { EditNote } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { CheckboxRow } from 'components/Table/CheckboxRow/CheckboxRow';
import type { GetJobsReponse } from 'api/getJobs/getJobs';
import { useTable } from 'providers/table/useTable';
import { formatDate } from 'utils/formatDate';

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
              </TableCell>
            </TableRow>
          );
        })
        .slice(startIndex, endIndex)}
    </TableBody>
  );
};
