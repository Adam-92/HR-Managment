import type { GridColDef } from '@mui/x-data-grid';

/* 
  Się zastanawiam nad poprawnością przy definicji typu tutaj dla 
  createdAt i updatedAt. Cyz sam string, jest ok?
  Czy pownienem korzystać z typu 'date' lub 'dateTime', a następnie 
  valueGetter ()
*/

export const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'title',
    headerName: 'Title',
    width: 250,
    editable: true,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 200,
    editable: true,
  },
  {
    field: 'updatedAt',
    headerName: 'Updated At',
    width: 200,
    editable: true,
  },
  {
    field: 'shortDescription',
    headerName: 'Short Description',
    sortable: true,
    width: 80,
  },
  {
    field: 'longDescription',
    headerName: 'Long Description',
    sortable: true,
    width: 120,
  },
  {
    field: 'logo',
    headerName: 'Logo',
    sortable: true,
    width: 120,
  },
  {
    field: 'companyName',
    headerName: 'Company Name',
    sortable: true,
    width: 200,
  },
  {
    field: 'status',
    headerName: 'Status',
    sortable: true,
    width: 120,
  },
];
