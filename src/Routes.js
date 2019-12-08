import App from './App';
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import LoginT from './pages/LoginT';
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
        ...LoginT,
        path: '/log'
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
