import {
  Box,
  Button,
  DialogActions,
  DialogContent,
  TextField,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useCallback } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import { useConfirm } from 'material-ui-confirm';

import {
  QUERY_KEY_GET_MEETINGS,
  type MeetingsData,
} from 'api/meetings/getMeetings';
import type { UseModalForm } from 'view/meetings/modalForm/useModalForm';
import type { PayloadMeetingDetails } from 'api/meetings/deleteMeeting';
import { deleteMeeting } from 'api/meetings/deleteMeeting';
import { parseError } from 'errors/parseError';

type DetailsMeetingFormProps = {
  modal: UseModalForm;
  meetingDetails?: MeetingsData;
};

export const MeetingDetailsForm = ({
  modal,
  meetingDetails,
}: DetailsMeetingFormProps) => {
  const queryClient = useQueryClient();
  const confirm = useConfirm();
  const { mutate } = useMutation(deleteMeeting, {
    onSuccess: () => {
      enqueueSnackbar(
        `Meeting with ${meetingDetails?.candidate.name} has been removed`,
        {
          variant: 'success',
        },
      );
      modal.handleCloseModal();
      queryClient.invalidateQueries([QUERY_KEY_GET_MEETINGS]);
    },
    onError: (error) => {
      enqueueSnackbar(`The meeting hasnt been removed: ${parseError(error)}`, {
        variant: 'success',
      });
    },
  });

  const { handleSubmit, register } = useForm<PayloadMeetingDetails>({
    defaultValues: {
      id: meetingDetails?.id,
    },
  });

  const onSubmit = useCallback(
    async (payload: PayloadMeetingDetails) => {
      await confirm({
        description: `This will permanently delete this meeting`,
      });
      mutate(payload);
    },
    [confirm, mutate],
  );

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <DialogContent>
        <TextField disabled label="Meeting ID:" {...register('id')} />
        <TextField
          disabled
          label="Date of Meeting:"
          defaultValue={meetingDetails?.date}
        />
        <TextField
          disabled
          label="Candidate name:"
          defaultValue={meetingDetails?.candidate.name}
        />

        <TextField
          disabled
          label="Job:"
          defaultValue={meetingDetails?.job.title}
        />
        <TextField disabled label="type:" defaultValue={meetingDetails?.type} />
        <TextField
          disabled
          label="Place/URL:"
          defaultValue={meetingDetails?.place}
        />
      </DialogContent>
      <DialogActions>
        <Button
          type="button"
          onClick={modal.handleCloseModal}
          variant="outlined"
          color="error"
        >
          Cancel
        </Button>
        <Button type="submit" variant="contained" color="error">
          Remove
        </Button>
      </DialogActions>
    </Box>
  );
};
