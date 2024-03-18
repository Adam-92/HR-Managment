import {
  Box,
  Button,
  CircularProgress,
  DialogActions,
  DialogContent,
} from '@mui/material';
import { useForm } from 'react-hook-form';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { enqueueSnackbar } from 'notistack';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import type { AutocompleteData } from 'types/types';
import { getAutocompleteOptionId } from 'utils/getOptionId';
import { addMeeting } from 'api/meetings/addMeeting';
import { parseError } from 'errors/parseError';
import { QUERY_KEY_GET_MEETINGS } from 'api/meetings/getMeetings';
import type { UseModalForm } from 'view/meetings/modalForm/useModalForm';

import { AutocompleteSelect } from './AutocompleteSelect';
import { MeetingType } from './MeetingType/MeetingType';
import { Place } from './Place/Place';
import { DateTimePicker } from './DateTimePicker/DateTimePicker';

export type ModalFormProps = {
  jobsData: AutocompleteData;
  candidatesData: AutocompleteData;
  modal: UseModalForm;
};

export type ModalFieldValues = {
  candidate: string;
  job: string;
  date: Dayjs | string;
  type: 'offline' | 'online';
  place: string;
};

export const CreateMeetingForm = ({
  jobsData,
  candidatesData,
  modal,
}: ModalFormProps) => {
  const { control, handleSubmit, watch } = useForm<ModalFieldValues>();
  const queryClient = useQueryClient();
  const { mutate, isLoading } = useMutation(addMeeting, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY_GET_MEETINGS]);
      enqueueSnackbar(`Meeting has been added`, {
        variant: 'success',
      });
      modal.handleCloseModal();
    },
    onError: (error) => {
      enqueueSnackbar(`${parseError(error)}`, { variant: 'error' });
    },
  });

  const onSubmit = (payload: ModalFieldValues) => {
    const candidateId = getAutocompleteOptionId(
      candidatesData,
      payload.candidate,
    );
    const jobId = getAutocompleteOptionId(jobsData, payload.job);

    mutate({
      candidateId,
      jobId,
      place: payload.place,
      date: dayjs(payload.date).format(),
      type: payload.type,
    });
  };

  if (isLoading) {
    return <CircularProgress />;
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <DialogContent>
        <AutocompleteSelect
          name="candidate"
          control={control}
          data={candidatesData}
        />
        <AutocompleteSelect name="job" control={control} data={jobsData} />
        <DateTimePicker control={control} />
        <MeetingType control={control} />
        <Place control={control} watch={watch} />
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
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </DialogActions>
    </Box>
  );
};
