import { CircularProgress, Button, Typography } from '@mui/material';

type SubmitButtonProps = {
  text: string;
  isLoading: boolean;
};

export const SubmitButton = ({ isLoading, text }: SubmitButtonProps) => {
  if (isLoading) {
    return <CircularProgress color="inherit" />;
  }

  return (
    <Button variant="contained" type="submit">
      <Typography>{text}</Typography>
    </Button>
  );
};
