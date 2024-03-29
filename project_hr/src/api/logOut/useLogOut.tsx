import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { QueryCache } from '@tanstack/react-query';

import { tokenStorage } from 'class/tokenStorageClass';
import { Routes } from 'routing/Routes';

export const useLogOut = () => {
  const navigate = useNavigate();

  const query = useMemo(() => new QueryCache(), []);

  const logOut = useCallback(() => {
    tokenStorage.clearTokens();
    navigate(Routes.home);

    query.clear();
  }, [navigate, query]);

  return logOut;
};
