/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Suspense, lazy } from 'react';
import Loading from './components/Loading/Loading';

const Main = lazy(() => import('./pages/Main/Main'));
const About = lazy(() => import('./pages/About/About'));
const Error = lazy(() => import('./pages/Error/Error'));
const Registration = lazy(() => import('./pages/Registration/Registration'));
const Authorization = lazy(() => import('./pages/Authorization/Authorization'));

// * Element
const Element = ({ component }) => {
  return <Suspense fallback={<Loading />}>{component}</Suspense>;
};

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Element component={<Main />} />,
      },
      {
        path: '/about',
        element: <Element component={<About />} />,
      },
      {
        path: '/Registration',
        element: <Element component={<Registration />} />,
      },
      {
        path: '/Authorization',
        element: <Element component={<Authorization />} />,
      },
      {
        path: '*',
        element: <Element component={<Error />} />,
      },
    ],
  },
]);

export default routes;
