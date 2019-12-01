import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class LogInPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {}

  handleLogIn = () => {
    console.log('login clicked ... ');
  };

  render() {
    return (
      <div>
        <button type="button" onClick={() => this.handleLogIn}>
          Log In...
        </button>
        <button
          type="button"
          onClick={() => {
            this.props.history.push('/home');
          }}
        >
          Log In...
        </button>
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
