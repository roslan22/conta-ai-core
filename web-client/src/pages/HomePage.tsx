import { Page, Typography } from '@foundation';
import { useUsersStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Redirect, useParams } from 'react-router-dom';

const HomePage: React.FC = observer(function HomePage() {
  const { t } = useTranslation();
  const params: { uuid: string } = useParams();
  const usersStore = useUsersStore();

  const currentUser = usersStore.getUser(params.uuid);

  return (
    <>
      {currentUser ? (
        <Page caption={t('pageNames.home')}>
          <Typography variant='subtitle2'>
            {t('interfaceLabels.hello')}
            {`, ${currentUser.userName}`}
          </Typography>
        </Page>
      ) : (
        <Redirect from='*' to='/' />
      )}
    </>
  );
});

export { HomePage as default };
