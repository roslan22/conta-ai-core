import { LOGIN_PAGE_ROUTE, ME_PAGE_ROUTE } from '@constants';
import { Logo, NavLink } from '@foundation';
import { Box, Drawer, List, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(({ variables, spacing }) => ({
  drawerRoot: {
    width: variables.layout.sidebarWidth,
  },
  drawerPaper: {
    width: variables.layout.sidebarWidth,
    padding: spacing(0, 2),
  },
  logo: {
    margin: spacing(4, 0, 2, 0),
  },
}));

export const Sidebar: React.FC = () => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Drawer variant='permanent' classes={{ root: classes.drawerRoot, paper: classes.drawerPaper }}>
      <Box className={classes.logo}>
        <Logo />
      </Box>
      <List>
        <ListItem>
          <NavLink to={LOGIN_PAGE_ROUTE} text={t('pageNames.login')} />
        </ListItem>
        {/* <ListItem>
          <NavLink to={HOME_PAGE_ROUTE} text={t('pageNames.home')} />
        </ListItem> */}
        <ListItem>
          <NavLink to={ME_PAGE_ROUTE} text={t('pageNames.me')} />
        </ListItem>
      </List>
    </Drawer>
  );
};
