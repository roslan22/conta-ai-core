import { ME_PAGE_ROUTE } from '@constants';
import { List, ListItem, Loading, NavLink, Widget } from '@foundation';
import { useUsersStore } from '@store';
import { observer } from 'mobx-react';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const UserSelection: React.FC = observer(function UserSelection() {
  const { t } = useTranslation();
  const usersStore = useUsersStore();

  return (
    <Widget caption={t('captions.userSelection')}>
      {usersStore.initialDataLoaded ? (
        <List>
          {usersStore.users.map((u) => (
            <ListItem key={u.uuid}>
              <NavLink to={`${ME_PAGE_ROUTE}/${u.uuid}`} text={u.userName} />
            </ListItem>
          ))}
        </List>
      ) : (
        <Loading size='s' />
      )}
    </Widget>
  );
});
