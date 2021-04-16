import { Snackbar } from '@foundation';
import MuiAlert from '@material-ui/lab/Alert';
import { observer } from 'mobx-react';
import React from 'react';

const ALERT_AUTO_HIDE_DURATION = 5000;

interface IProps {
  message: string;
  mode: 'error' | 'warning' | 'info';
  removeNotification: () => void;
}

export const Notification: React.FC<IProps> = observer(({ message, mode, removeNotification }) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleClose = () => {
    setIsOpen(false);
    removeNotification();
  };

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      open={isOpen}
      autoHideDuration={ALERT_AUTO_HIDE_DURATION}
      onClose={handleClose}
    >
      <MuiAlert elevation={6} variant='filled' severity={mode}>
        {message}
      </MuiAlert>
    </Snackbar>
  );
});
