import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(({ variables, spacing }) => ({
  root: {
    borderRadius: variables.borders.large,
    boxShadow: variables.shadows.widget,
    padding: spacing(2, 3),
    margin: spacing(0, 3, 3, 0),
    width: (props: { size: TWidgetSize }): string => {
      switch (props.size) {
        case 's':
          return '31%';
        case 'm':
          return '48%';
        case 'l':
          return '100%';
      }
    },
  },
  caption: {
    marginBottom: spacing(2),
  },
}));

export type TWidgetSize = 's' | 'm' | 'l';

interface IProps {
  children: React.ReactNode;
  caption: string;
  className?: string;
  size?: TWidgetSize;
  onClick?: () => void;
}

export const Widget: React.FC<IProps> = ({ caption, children, size = 's', className, onClick }) => {
  const classes = useStyles({ size });

  return (
    <Paper className={`${classes.root} ${className}`} onClick={onClick}>
      <Typography className={classes.caption} variant='subtitle1'>
        {caption}
      </Typography>
      {children}
    </Paper>
  );
};
