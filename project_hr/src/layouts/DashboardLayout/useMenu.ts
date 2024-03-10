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
  const currentLanguage = i18n.language;

  return {
    currentLanguage,
    open,
    handleClick,
    handleClose,
    anchorEl,
  };
};
