import React from 'react';
import { renderRoutes } from 'react-router-config';
// import Head from './components/Head';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    let { route } = this.props;
    return (
      <div>
        {/* <Head /> */}
        <div className="page_container">{renderRoutes(route.routes)}</div>
      </div>
    );
  }
}

export default { component: App };
