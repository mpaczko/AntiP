import React, { Component } from 'react';
import axios from 'axios';
import EmployeeDialog from '../EmployeeDialog/EmployeeDialog';

// Edit employee dialog on Employees Page

export default class EditEmployee extends Component<any, any> {
  // Send edited information to server
  sendRequest = (data: any) => {
    axios
      .put(
        `https://skn-phishing-1-0-0.azurewebsites.net/api/v1/employees/${this.props.editID}`,
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
        header="Edit Employee"
        open={props.open}
        closeFunc={props.closeFunc}
        employee={props.employee}
        sendRequest={(data: any) => this.sendRequest(data)}
      />
    );
  }
}
