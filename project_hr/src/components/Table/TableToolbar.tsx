import { Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import type { KeyRoutes } from 'routing/Routes';
import { Routes } from 'routing/Routes';

import { SelectRowsPerPage } from './Pagination/SelectRowsPerPage';
import { Search } from './Search/Search';
import { SelectActions } from './SelectActions/SelectActions';
import type { DataCategory } from './Table';

type TableToolbarProps = {
  dataCategory: DataCategory;
  link: KeyRoutes;
};

export const TableToolbar = ({ dataCategory, link }: TableToolbarProps) => {
  const { t } = useTranslation();
  return (
    <Box className="bFlex">
      <Box className="buttonSelf">
        <Button
          component={Link}
          to={Routes[link]}
          variant="contained"
          color="success"
        >
          + {t('tableToolbar.add')}
        </Button>
      </Box>
      <SelectActions dataCategory={dataCategory} />
      <SelectRowsPerPage />
      <Search />
    </Box>
  );
};
