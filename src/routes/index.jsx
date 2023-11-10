import MainLayout from '@layouts/MainLayout';
import Detail from '@pages/Detail';
import Form from '@pages/Form';

import Home from '@pages/Home';
import Login from '@pages/Login';
import NotFound from '@pages/NotFound';
import Register from '@pages/Register';

const routes = [
  {
    path: '/',
    name: 'Home',
    protected: false,
    component: Home,
    layout: MainLayout,
  },
  {
    path: '/login',
    name: 'Login',
    protected: false,
    component: Login,
    layout: MainLayout,
  },
  {
    path: '/register',
    name: 'Register',
    protected: false,
    component: Register,
    // layout: MainLayout,
  },
  {
    path: '/detail/:id',
    name: 'Detail',
    protected: false,
    component: Detail,
    layout: MainLayout,
  },
  {
    path: '/form',
    name: 'Form',
    protected: false,
    component: Form,
    layout: MainLayout,
  },
  { path: '*', name: 'Not Found', component: NotFound, layout: MainLayout, protected: false },
];

export default routes;
