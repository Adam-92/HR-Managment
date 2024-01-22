import { MenuItem } from '@mui/material';

import i18n from '../../../i18n';

import { languages } from './languages';

export const MenuItems = ({ onClose }: { onClose: () => void }) => {
  return (
    <>
      {languages.map((language) => {
        return (
          <MenuItem
            key={language}
            onClick={() => {
              i18n.changeLanguage(language);
              onClose();
            }}
          >
            {language}
          </MenuItem>
        );
      })}
    </>
  );
};
