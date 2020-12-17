import React, { Component } from 'react';
import { Button, Card, TextField, SvgIcon } from '@material-ui/core';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import axios from 'axios';
import styles from './LoginPage.module.scss';

export default class LoginPage extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  // Send request to server with login credential
  // and get key which will be stored in local storage in browser
  loginHandler = (event: any) => {
    event.preventDefault();
    const loginCred = this.state;
    axios
      .post(
        'https://skn-phishing-1-0-0.azurewebsites.net/login',
        {
          password: loginCred.username,
          username: loginCred.password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((res) => {
        localStorage.setItem(
          'Authorization',
          res.headers.authorization.replace(' ', ''),
        );
        window.location.replace('/dashboard');
      });
  };

  render(): any {
    const loginCred = this.state;
    return (
      <div className={styles.LoginPage}>
        <SvgIcon className={styles.Icon} component={AssignmentIndIcon} />
        <h1 className={styles.CompanyName}>Sign in</h1>
        <Card className={styles.LoginContainer} variant="outlined">
          <form
            className={styles.LoginForm}
            onSubmit={(event) => this.loginHandler(event)}
          >
            <TextField
              className={styles.LoginInput}
              id="outlined-basic"
              label="email"
              variant="outlined"
              value={loginCred.username}
              onChange={(event) =>
                this.setState({ username: event.target.value })
              }
            />
            <TextField
              className={styles.LoginInput}
              id="outlined-basic"
              label="password"
              variant="outlined"
              type="password"
              value={loginCred.password}
              onChange={(event) =>
                this.setState({ password: event.target.value })
              }
            />
            <Button className={styles.Button} variant="contained" type="submit">
              Login
            </Button>
          </form>
        </Card>
      </div>
    );
  }
}
