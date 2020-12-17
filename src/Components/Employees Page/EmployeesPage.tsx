import React, { Component } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { Fab, CircularProgress } from '@material-ui/core';
import axios from 'axios';
import EmployeeCard from './EmployeeCard/EmployeeCard';
import SideBar from '../SideBar/SideBar';
import AddNewEmployeeCard from './AddNewEmployeeCard/AddNewEmployee';
import styles from './EmployeesPage.module.scss';
import EditEmployee from './EditEmployee/EditEmployee';

export default class EmployeesPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      employees: [],
      newEmployeeTab: false,
      editEmployeeTab: false,
      employeeEdit: '',
      editID: '',
    };
  }

  // Fetching data from server and setting it as state after page load
  componentDidMount() {
    axios
      .get(`https://skn-phishing-1-0-0.azurewebsites.net/api/v1/employees/`, {
        headers: {
          Authorization: localStorage.getItem('Authorization'),
        },
      })
      .then((res) => {
        const { data } = res;
        this.setState({ employees: data });
      });
  }

  // Function to close new employee dialog
  closeNewEmployeeTab = () => {
    this.setState({
      newEmployeeTab: false,
    });
  };

  // Function to close edit employee dialog
  closeEditEmployeeTab = () => {
    this.setState({
      editEmployeeTab: false,
      employeeEdit: '',
      editID: '',
    });
  };

  render() {
    let mainContent: any = <CircularProgress className={styles.Loader} />;
    const { state } = this;
    // If page is empty set employees cards
    if (state.employees.length !== 0) {
      mainContent = state.employees.map((employee: any) => {
        return (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            openEdit={() =>
              this.setState({
                editEmployeeTab: true,
                employeeEdit: employee,
                editID: employee.id,
              })
            }
          />
        );
      });
    }
    return (
      <div className={styles.EmployeesContainer}>
        <SideBar className={styles.SideBar} />
        <div className={styles.SideContent}>
          <div className={styles.TopContent}>
            <h1 className={styles.PageTitle}>Employees Tab</h1>
            <Fab
              variant="extended"
              color="primary"
              className={styles.AddEmployee}
              onClick={() => this.setState({ newEmployeeTab: true })}
            >
              <AddIcon className={styles.AddIcon} />
              Add Employee
            </Fab>
          </div>
          <div className={styles.EmployeesCards}>
            <AddNewEmployeeCard
              open={state.newEmployeeTab}
              closeFunc={this.closeNewEmployeeTab}
            />
            <EditEmployee
              open={state.editEmployeeTab}
              closeFunc={this.closeEditEmployeeTab}
              employee={state.employeeEdit}
              editID={state.editID}
            />
            {mainContent}
          </div>
        </div>
      </div>
    );
  }
}
