import React, { Component } from 'react';
import { Drawer } from '@material-ui/core';
import {
  Dashboard,
  Equalizer,
  Group,
  Settings,
  Person,
} from '@material-ui/icons';
import NavLink from './NavLink/NavLink';
import styles from './SideBar.module.scss';
import logo from '../../Assets/logo_tr.svg';

// Left side bar

export default class SideBar extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      openSideBar: true,
    };
  }

  render() {
    const { state } = this;
    return (
      <Drawer
        elevation={16}
        variant="permanent"
        open={state.openSideBar}
        className={styles.SideBar}
      >
        <div className={styles.Background}>
          <img className={styles.Img} src={logo} alt="logo" width="300px" />
          <NavLink name="Dashboard" img={<Dashboard />} url="/dashboard" />
          <NavLink name="Statistics" img={<Equalizer />} url="/statistics" />
          <NavLink name="Employees Tab" img={<Person />} url="/employees" />
          <NavLink name="Departments Tab" img={<Group />} url="departments" />
          <NavLink name="Settings" img={<Settings />} url="/settings" />
        </div>
      </Drawer>
    );
  }
}
