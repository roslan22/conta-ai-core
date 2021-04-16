import { MyContracts } from '@components';
import { Loading, Page } from '@foundation';
import { useContractsStore, useUsersStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

const MePage: React.FC = observer(function MePage() {
  const { t } = useTranslation();
  const params: { uuid: string } = useParams();
  const usersStore = useUsersStore();
  const contractsStore = useContractsStore();
  const currentUser = usersStore.getUser(params.uuid);

  React.useEffect(() => {
    if (currentUser) {
      contractsStore.init(currentUser.uuid);
    }
  }, [contractsStore, currentUser]);

  return (
    <Page caption={t('pageNames.me')}>
      {usersStore.initialDataLoaded ? <MyContracts userUuid={currentUser.uuid} /> : <Loading />}
    </Page>
  );
});

export { MePage as default };
