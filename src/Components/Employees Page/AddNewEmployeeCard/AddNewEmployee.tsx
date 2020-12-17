import React, { Component } from 'react';
import axios from 'axios';
import EmployeeDialog from '../EmployeeDialog/EmployeeDialog';

// Add new employee dialog on Employees Page

export default class AddNewEmployeeCard extends Component<any, any> {
  // Send new employee information to server
  sendRequest = (data: any) => {
    axios
      .post(
        'https://skn-phishing-1-0-0.azurewebsites.net/api/v1/employees/',
        {
          firstName: data.first_name,
          lastName: data.last_name,
          email: data.email,
          department: data.department,
          isManager: data.manager,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: localStorage.getItem('Authorization'),
          },
        },
      )
      .then(() => {
        const { props } = this;
        props.closeFunc();
      });
  };

  
  render() {
    const { props } = this;
    return (
      <EmployeeDialog
        header="Add New Employee"
        open={props.open}
        closeFunc={props.closeFunc}
        sendRequest={(data: any) => this.sendRequest(data)}
      />
    );
  }
}
