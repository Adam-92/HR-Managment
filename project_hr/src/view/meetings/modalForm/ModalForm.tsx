import { Dialog, DialogTitle, useMediaQuery, useTheme } from '@mui/material';

import { MeetingFormDataHandler } from '../forms/MeetingFormDataHandler';
import type { ModalFormHandlerProps } from '../forms/MeetingFormDataHandler';

import type { UseModalForm } from './useModalForm';

export type ModalFormProps = ModalFormHandlerProps & {
  modal: UseModalForm;
  text: string;
};

export const ModalForm = ({ children, modal, text }: ModalFormProps) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MeetingFormDataHandler>
      {(jobsData, candidatesData) => {
        return (
          <Dialog
            open={modal.openModal}
            onClose={modal.handleCloseModal}
            fullScreen={fullScreen}
            maxWidth="sm"
            fullWidth
          >
            <DialogTitle>{text}</DialogTitle>
            {children(jobsData, candidatesData)}
          </Dialog>
        );
      }}
    </MeetingFormDataHandler>
  );
};
