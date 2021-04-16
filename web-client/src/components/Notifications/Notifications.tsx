import { useUIStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { Notification } from './Notification';

export const Notifications: React.FC = observer(() => {
  const uiStore = useUIStore();

  return (
    <>
      {uiStore.requestErrors.map((e: string, index: number) => (
        <Notification message={e} mode='error' key={index} removeNotification={() => uiStore.removeError(index)} />
      ))}
    </>
  );
});
