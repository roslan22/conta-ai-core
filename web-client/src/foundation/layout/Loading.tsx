import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(() => ({
  rootL: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootS: {
    display: 'inline-block',
  },
  text: {
    textAlign: 'center',
  },
}));

interface IProps {
  size?: 's' | 'l';
}

export const Loading: React.FC<IProps> = ({ size = 'l' }) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Box className={size === 'l' ? classes.rootL : classes.rootS}>
      <Typography className={classes.text} variant={size === 'l' ? 'subtitle1' : 'body2'}>
        {t('interfaceLabels.loading')}
      </Typography>
    </Box>
  );
};
