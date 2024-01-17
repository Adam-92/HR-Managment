import {
  TableBody,
  TableRow,
  TableCell,
  ListItemIcon,
  Alert,
} from '@mui/material';
import { EditNote, Delete } from '@mui/icons-material';
import { Link } from 'react-router-dom';

import type { Candidate } from '@types/types';
import { useTable } from 'providers/table/useTable';
import { CheckboxRow } from 'components/Table/CheckboxRow/CheckboxRow';
import { formatDate } from 'utils/formatDate';
import { useDeleteCandidate } from 'api/candidate/deleteCandidate/useDeleteCandidate';
import { getSingleCandidateUrl } from 'routing/Routes';

type CandidateRowsProps = {
  data: Candidate[];
};

export const CandidatesRows = ({ data }: CandidateRowsProps) => {
  const { search } = useTable();

  const { handleDeleteCandidate } = useDeleteCandidate();

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
      {data.map((candidate: Candidate) => {
        return (
          <TableRow key={candidate.id}>
            <CheckboxRow id={candidate.id} />
            <TableCell>{candidate.name}</TableCell>
            <TableCell>{candidate.position}</TableCell>
            <TableCell>{formatDate(candidate.createdAt)}</TableCell>
            <TableCell>{formatDate(candidate.updatedAt)}</TableCell>
            <TableCell>{candidate.shortDescription}</TableCell>
            <TableCell>{candidate.longDescription}</TableCell>
            <TableCell>{candidate.logo}</TableCell>
            <TableCell>{candidate.companyName}</TableCell>
            <TableCell>{candidate.appliedToJobId}</TableCell>
            <TableCell>
              <Link to={getSingleCandidateUrl(candidate.id)}>
                <ListItemIcon sx={{ cursor: 'pointer' }}>
                  <EditNote />
                </ListItemIcon>
              </Link>
              <ListItemIcon sx={{ cursor: 'pointer' }}>
                <Delete onClick={() => handleDeleteCandidate(candidate)} />
              </ListItemIcon>
            </TableCell>
          </TableRow>
        );
      })}
    </TableBody>
  );
};
