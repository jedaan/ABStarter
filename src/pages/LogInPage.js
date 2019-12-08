import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';

class LogInPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {}

  validateForm = () => {
    let { email, password } = this.state;
    return email.length > 0 && password.length > 0;
  };

  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    let { email, password } = this.state;
    return (
      <div className="container_login_style">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={email}
              onChange={e => this.setState({ email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId="password">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={password}
              onChange={e => this.setState({ password: e.target.value })}
              type="password"
            />
          </FormGroup>
          <Button block disabled={!this.validateForm()} type="submit">
            Login
          </Button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(LogInPage))
};
