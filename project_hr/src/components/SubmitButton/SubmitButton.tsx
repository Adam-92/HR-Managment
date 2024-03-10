import { CircularProgress, Button, Typography } from '@mui/material';

type SubmitButtonProps = {
  text: string;
  isLoading: boolean;
};

export const SubmitButton = ({ isLoading, text }: SubmitButtonProps) => {
  return (
    <Button variant="contained" color="secondary" type="submit">
      {isLoading ? (
        <CircularProgress color="inherit" />
      ) : (
        <Typography>{text}</Typography>
      )}
    </Button>
  );
};
