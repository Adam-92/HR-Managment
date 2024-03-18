import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  Paper,
} from '@mui/material';

import type { BlacklistData } from 'api/blacklist/getBlacklist';

import { useBlacklistParams } from './useBlacklistParams';

type Rows = {
  data: BlacklistData[];
};

type BlacklistTableProps = {
  columnsName: string[];
  rows: Rows;
};

export const BlacklistTable = ({ columnsName, rows }: BlacklistTableProps) => {
  const { handleSortColumn } = useBlacklistParams();
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columnsName.map((columnName) => (
              <TableCell
                sx={{ cursor: 'pointer' }}
                key={columnName}
                onClick={() => handleSortColumn(columnName.toLowerCase())}
              >
                {columnName}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.data.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.reason}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};