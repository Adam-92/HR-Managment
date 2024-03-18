import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from '@mui/material';
import { useTranslation } from 'react-i18next';

import { useTable } from 'providers/table/useTable';
import type { DataCategory } from 'components/Table/Table';

import { useSelectActions } from './useSelectActions';
import { actions } from './actions';

type SelectActionsProps = {
  dataCategory: DataCategory;
};

export const SelectActions = ({ dataCategory }: SelectActionsProps) => {
  const { checkboxRow } = useTable();
  const { value, handleChange } = useSelectActions(dataCategory, checkboxRow);
  const { t } = useTranslation();
  return (
    <FormControl disabled={!checkboxRow.someRowsAreMarked} className="mr">
      <InputLabel>{t('tableToolbar.select')}</InputLabel>
      <Select
        value={value}
        label={t('tableToolbar.actions')}
        onChange={handleChange}
      >
        {actions.map((action) => {
          return (
            <MenuItem value={action} key={action}>
              {t(`tableToolbar.actionTypes.${action}`)}
            </MenuItem>
          );
        })}
      </Select>
      <FormHelperText>{t('tableToolbar.availableRows')}</FormHelperText>
    </FormControl>
  );
};
