import { type VariantType, useSnackbar } from 'notistack';

export const useSnackbarHandler = () => {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = (message: string, variant: VariantType) => {
    enqueueSnackbar(message, { variant });
  };

  return handleClickVariant;
};
