import { Alert, CircularProgress } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import multiMonthPlugin from '@fullcalendar/multimonth';
import interactionPlugin from '@fullcalendar/interaction';

import { QUERY_KEY_GET_MEETINGS, getMeetings } from 'api/meetings/getMeetings';
import { Header } from 'components/Header/Header';
import { parseError } from 'errors/parseError';

import { useMeetings } from './useMeetings';
import { adaptDataToEvents } from './adaptDataToEvents';
import { validateParams } from './validateParams';
import { ModalForm } from './modalForm/ModalForm';
import { useModalForm } from './modalForm/useModalForm';
import { CreateMeetingForm } from './forms/createMeetingForm/CreateMeetingForm';
import { MeetingDetailsForm } from './forms/detailsMeetingForm/MeetingDetailsForm';

export const Meetings = () => {
  const {
    params,
    handleDatesSet,
    dateFromParams,
    meetingDetails,
    getEventDetails,
  } = useMeetings();
  const createMeetingModal = useModalForm();
  const readMeetingModal = useModalForm();

  const paramErrors = validateParams(params);

  const { data, isLoading, isError, error } = useQuery(
    [QUERY_KEY_GET_MEETINGS, params],
    () => getMeetings(params),
    {
      enabled: paramErrors.length === 0,
    },
  );

  if (paramErrors.length > 0) {
    return (
      <>
        {paramErrors.map((err) => (
          <Alert key={err} severity="warning">
            {err}
          </Alert>
        ))}
      </>
    );
  }

  if (isLoading) {
    return <CircularProgress />;
  }

  if (isError) {
    return <Alert severity="warning">{parseError(error)}</Alert>;
  }

  const events = adaptDataToEvents(data);

  return (
    <>
      <Header title="Meetings" />
      <FullCalendar
        themeSystem="standard"
        events={events}
        plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
        initialDate={new Date(dateFromParams)}
        datesSet={handleDatesSet}
        selectable
        eventClick={(event) => getEventDetails(event, readMeetingModal, data)}
        customButtons={{
          createNewEvent: {
            text: 'New Event',
            click: createMeetingModal.handleOpenModal,
          },
        }}
        headerToolbar={{ end: 'createNewEvent ,prev,next' }}
      />

      <ModalForm text="New Event" modal={createMeetingModal}>
        {(jobsData, candidatesData) => (
          <CreateMeetingForm
            jobsData={jobsData}
            candidatesData={candidatesData}
            modal={createMeetingModal}
          />
        )}
      </ModalForm>
      <ModalForm text="Meeting Details" modal={readMeetingModal}>
        {() => (
          <MeetingDetailsForm
            modal={readMeetingModal}
            meetingDetails={meetingDetails}
          />
        )}
      </ModalForm>
    </>
  );
};
