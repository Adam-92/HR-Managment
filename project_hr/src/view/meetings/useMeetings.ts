import { useSearchParams } from 'react-router-dom';
import { useCallback, useMemo, useState } from 'react';
import type { DatesSetArg, EventClickArg } from '@fullcalendar/core';

import type { MeetingsData, ParamsMeetings } from 'api/meetings/getMeetings';
import { defaultMeetingsParam } from 'api/meetings/getMeetings';

import type { UseModalForm } from './modalForm/useModalForm';

export const useMeetings = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [meetingDetails, setMeetingDetails] = useState<MeetingsData>();

  const params: ParamsMeetings = useMemo(
    () => ({
      month: searchParams.get('month') || defaultMeetingsParam.month,
      year: searchParams.get('year') || defaultMeetingsParam.year,
      day: defaultMeetingsParam.day,
    }),
    [searchParams],
  );

  const dateFromParams = `${params.year}-${params.month}-${params.day}`;

  const handleDatesSet = useCallback(
    (info: DatesSetArg) => {
      const date = info.view.calendar.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      if (month === 1 && year === 2022) {
        const prevButton = document.querySelector('.fc-prev-button');
        if (prevButton) prevButton.setAttribute('disabled', 'true');
      } else {
        const prevButton = document.querySelector('.fc-prev-button');
        if (prevButton) prevButton.removeAttribute('disabled');
      }

      setSearchParams({ month: month.toString(), year: year.toString() });
    },
    [setSearchParams],
  );

  const getEventDetails = useCallback(
    (
      eventElement: EventClickArg,
      modal: UseModalForm,
      data: MeetingsData[],
    ) => {
      const eventId = eventElement.event.id;
      const eventDetails = data.find((meeting) => meeting.id === eventId);
      setMeetingDetails(eventDetails);
      modal.handleOpenModal();
    },
    [setMeetingDetails],
  );

  return {
    params,
    handleDatesSet,
    dateFromParams,
    meetingDetails,
    setMeetingDetails,
    getEventDetails,
  };
};
