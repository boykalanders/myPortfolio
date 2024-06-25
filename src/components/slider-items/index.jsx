import React from 'react';
import {
  Avatar,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { useStyles } from './styles/slider-items';
import {
  Apps,
  AssignmentInd,
  Build,
  Home,
  School,
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

import { heroInfo } from '../../data/data';

const menuItems = [
  {
    listIcon: <Home />,
    listText: 'Home',
    listPath: '/',
  },
  {
    listIcon: <AssignmentInd />,
    listText: 'Resume',
    listPath: '/resume',
  },
  {
    listIcon: <Apps />,
    listText: 'Portfolio',
    listPath: '/portfolio',
  },
  {
    listIcon: <Build />,
    listText: 'Skills',
    listPath: '/skills',
  },
  {
    listIcon: <School />,
    listText: 'Education',
    listPath: '/education',
  }
];

const SliderItems = ({ toggleSlide }) => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.menuSlide} onClick={toggleSlide}>
      <Avatar
        className={classes.myImage}
        src="/images/myImage.jpg"
        alt={heroInfo.name}
      />
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.listPath}
            component={Link}
            to={item.listPath}
          >
            <ListItemIcon className={classes.listIcon}>
              {item.listIcon}
            </ListItemIcon>
            <ListItemText className={classes.listText}>
              {item.listText}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SliderItems;
