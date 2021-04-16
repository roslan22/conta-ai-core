import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    border: 'none',
    boxShadow: 'none',
    marginBottom: spacing(3),
  },
  pageCaption: {
    marginBottom: spacing(3),
  },
}));

interface IProps {
  children: React.ReactNode;
  caption: string;
}

export const PageSection: React.FC<IProps> = ({ caption, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.pageCaption} variant='h3'>
        {caption}
      </Typography>
      {children}
    </Paper>
  );
};
