import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ variables, spacing }) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    overflow: 'hidden',
    border: 'none',
    boxShadow: 'none',
    padding: spacing(4),
  },
  pageCaption: {
    marginBottom: spacing(4),
  },
}));

interface IProps {
  children: React.ReactNode;
  caption: string;
}

export const Page: React.FC<IProps> = ({ caption, children }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Typography className={classes.pageCaption} variant='h1'>
        {caption}
      </Typography>
      {children}
    </Paper>
  );
};
