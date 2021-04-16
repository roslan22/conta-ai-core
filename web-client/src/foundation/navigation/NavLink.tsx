import { makeStyles } from '@material-ui/core';
import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const useStyles = makeStyles(({ variables, spacing }) => ({
  root: {
    fontWeight: variables.fonts.weight.bold,
    color: variables.colors.link,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  active: {
    textDecoration: 'underline',
  },
}));

interface IProps {
  to: string;
  text: string;
}

export const NavLink: React.FC<IProps> = ({ to, text }) => {
  const classes = useStyles();

  return (
    <Link className={classes.root} to={to} activeClassName={classes.active}>
      {text}
    </Link>
  );
};
