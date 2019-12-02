import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../data/actions/index';
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

  render() {
    return (
      <div>
        Landing Page
        <button type="button" onClick={this.handleLogIn}>
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
    handleLogIn: bindActionCreators(loginAction, dispatch)
  };
}

export default {
  component: connect(
    mapStateToProps,
    mapDispatchToProps
  )(withRouter(LandingPage))
};
