import React, { Component } from 'react';
import {
  Dialog,
  DialogTitle,
  FormControlLabel,
  TextField,
  Checkbox,
  Button,
  InputAdornment,
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import EmailIcon from '@material-ui/icons/Email';
import PeopleIcon from '@material-ui/icons/People';
import styles from './EmployeeDialog.module.scss';

export default class EmployeeDialog extends Component<any, any> {
  state = {
    first_name: '',
    last_name: '',
    email: '',
    department: '',
    manager: false,
  };

  componentDidUpdate(
    prevProps: Readonly<any>,
    prevState: Readonly<any>,
    snapshot?: any,
  ) {
    if (prevState === this.state && this.props.employee) {
      this.setState({
        first_name: this.props.employee.firstName,
        last_name: this.props.employee.lastName,
        email: this.props.employee.email,
        department: this.props.employee.department,
        manager: this.props.employee.isManager,
      });
    }
  }

  closeDialog = () => {
    this.props.closeFunc();
    setTimeout(
      () =>
        this.setState({
          first_name: '',
          last_name: '',
          email: '',
          department: '',
          manager: false,
        }),
      1000,
    );
  };

  handleManagerCheckbox = (event: any) => {
    this.setState({ manager: event });
  };

  render() {
    return (
      <Dialog className={styles.EmployeeDialog} open={this.props.open}>
        <div className={styles.TopContent}>
          <DialogTitle className={styles.Title}>
            {this.props.header}
          </DialogTitle>
          <CloseIcon className={styles.Icon} onClick={this.closeDialog} />
        </div>
        <form
          className={styles.EmployeeForm}
          onSubmit={(event) => {
            this.props.sendRequest(this.state);
          }}
        >
          <div className={styles.PersonalInfo}>
            <TextField
              className={styles.InfoInput}
              label="Name"
              variant="outlined"
              name="firstName"
              required
              onChange={(event) =>
                this.setState({ first_name: event.target.value })
              }
              value={this.state.first_name}
            />
            <TextField
              className={styles.InfoInput}
              label="Last Name"
              variant="outlined"
              name="lastName"
              required
              onChange={(event) =>
                this.setState({ last_name: event.target.value })
              }
              value={this.state.last_name}
            />
          </div>
          <TextField
            className={styles.InfoInput}
            label="Email"
            variant="outlined"
            name="email"
            required
            onChange={(event) => this.setState({ email: event.target.value })}
            value={this.state.email}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <EmailIcon className={styles.InputIcon} />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={styles.InfoInput}
            label="Department"
            variant="outlined"
            name="department"
            required
            onChange={(event) =>
              this.setState({ department: event.target.value })
            }
            value={this.state.department}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <PeopleIcon className={styles.InputIcon} />
                </InputAdornment>
              ),
            }}
          />
          <FormControlLabel
            className={styles.ManagerCheckbox}
            control={
              <Checkbox
                color="primary"
                name="manager"
                checked={this.state.manager}
                onChange={(event) =>
                  this.handleManagerCheckbox(event.target.checked)
                }
              />
            }
            label="Manager"
          />
          <Button className={styles.Button} variant="contained" type="submit">
            Submit
          </Button>
        </form>
      </Dialog>
    );
  }
}
