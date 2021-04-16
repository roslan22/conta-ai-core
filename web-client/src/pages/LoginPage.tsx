import { UserSelection } from '@components';
import { Page } from '@foundation';
import React from 'react';
import { useTranslation } from 'react-i18next';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Page caption={t('pageNames.login')}>
      <UserSelection />
    </Page>
  );
};

export { LoginPage as default };
