import { useCallback, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useCollapseTab = () => {
  const { pathname } = useLocation();
  const consistentURL =
    pathname === '/candidates' || pathname === '/candidates/blacklist';
  const [open, setOpen] = useState(consistentURL);

  useEffect(() => {
    setOpen(consistentURL);
  }, [consistentURL]);

  const handleOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return { handleOpen, open, consistentURL };
};
