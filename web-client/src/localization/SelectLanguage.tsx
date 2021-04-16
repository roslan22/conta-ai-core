import React from 'react';
import { ChangeLangLink } from './ChangeLangLink';
import { List, ListItem } from '@material-ui/core';

export const SelectLanguage = () => (
  <List>
    <ListItem>
      <ChangeLangLink lang='en'>EN</ChangeLangLink>
    </ListItem>
    <ListItem>
      <ChangeLangLink lang='ru'>RU</ChangeLangLink>
    </ListItem>
  </List>
);
