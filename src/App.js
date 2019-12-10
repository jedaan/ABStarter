import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Container } from 'react-bootstrap';
import Head from './components/Head';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { route } = this.props;
    return (
      <div>
        <Head />
        <Container>{renderRoutes(route.routes)}</Container>
      </div>
    );
  }
}

export default { component: App };
