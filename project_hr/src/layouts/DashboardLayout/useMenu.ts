import { useState, useCallback } from 'react';

import i18n from 'i18n';

export const useMenu = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    },
    [],
  );
  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);
  const formatedLanguage = i18n.language === 'pl' ? 'PL' : 'EN';
  return {
    formatedLanguage,
    open,
    handleClick,
    handleClose,
    anchorEl,
  };
};
