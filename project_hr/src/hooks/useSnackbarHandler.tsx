import { VariantType, useSnackbar } from 'notistack';

export const useSnackbarHandler = () => {
  /* Penwie się przyda, a nie ma sensu tworzyć wszędzie funkcji handleClickVariant */
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return handleClickVariant;
};
