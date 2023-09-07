import { useState, useCallback } from 'react';

export const useTable = () => {
  const [isAllCheckboxesSet, setIsAllCheckboxesSet] = useState(false);

  const handleChangeAllCheckboxes = useCallback(() => {
    setIsAllCheckboxesSet((prev) => !prev);
  }, []);

  const controlCheckboxes = {
    isAllCheckboxesSet,
    handleChangeAllCheckboxes,
  };

  return {
    controlCheckboxes,
  };
};
