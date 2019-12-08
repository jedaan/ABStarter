import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logInRequest } from '../redux/actions/userSessionActions';
import { bindActionCreators } from 'redux';

class LandingPage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  handleLogIn = () => {
    this.props.handleLogIn('jed3an@gmail.com', '123456');
    this.props.history.push('/home');
  };

  handleLogIn2 = () => {
    this.props.history.push('/log');
  };

  render() {
    return (
      <div>
        Landing Page
        <button type="button" onClick={this.handleLogIn}>
          Log In...
        </button>
        <button type="button" onClick={this.handleLogIn2}>
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
  return {
    handleLogIn: bindActionCreators(logInRequest, dispatch)
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(LandingPage))
};
