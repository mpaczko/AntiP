import React, { Component } from 'react';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import styles from './NavLink.module.scss';

// Single link in side bar

class NavLink extends Component<any, any> {
  redirect = (url: any) => {
    window.location.replace(url);
  };

  render() {
    const { props } = this;
    return (
      <ListItem
        className={styles.Button}
        button
        onClick={() => this.redirect(props.url)}
      >
        <ListItemIcon className={styles.Icon}>{props.img}</ListItemIcon>
        <ListItemText className={styles.Text} primary={props.name} />
      </ListItem>
    );
  }
}

export default NavLink;
