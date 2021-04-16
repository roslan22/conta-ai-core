import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ variables, spacing }) => ({
  logo: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  logoC: {
    color: variables.colors.right,
  },
  logoDot: {
    color: variables.colors.wrong,
  },
}));

export const Logo: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.logo}>
      <Typography variant='h1' className={classes.logoC}>
        Conta
      </Typography>
      <Typography variant='h1' className={classes.logoDot}>
        .
      </Typography>
    </Box>
  );
};
