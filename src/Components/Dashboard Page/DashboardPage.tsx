import React, { Component } from 'react';
import SideBar from '../SideBar/SideBar';
import styles from './DashboardPage.module.scss';

// Dashboard page.
// Bład ESLinta wynika z braku stanu który zostanie później dodany

export default class DashboardPage extends Component<any, any> {
  render() {
    return (
      <div className={styles.DashboardContainer}>
        <SideBar className={styles.SideBar} />
        <div className={styles.SideContent} />
      </div>
    );
  }
}
