import App from './App';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import LandingPage from './pages/LandingPage';
export default [
  {
    ...App,
    routes: [
      {
        ...LandingPage,
        path: '/',
        exact: true
      },
      {
        ...LogInPage,
        path: '/logIn'
      },
      {
        ...HomePage,
        path: '/home'
      }
    ]
  }
];
