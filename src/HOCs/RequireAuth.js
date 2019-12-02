import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

export default ComposedComponent => {
  class RequireAuth extends Component {
    render() {
      const { authenticated } = this.props;

      switch (authenticated) {
        case false:
        case null || undefined:
          return <Redirect to="/" />;

        default:
          return <ComposedComponent {...this.props} />;
      }
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.userSession.authenticated };
  }
  return connect(mapStateToProps)(RequireAuth);
};
