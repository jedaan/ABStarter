import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import RequireAuth from '../HOC/RequireAuth';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return <div>Home Page</div>;
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
  )(RequireAuth(withRouter(HomePage)))
};
