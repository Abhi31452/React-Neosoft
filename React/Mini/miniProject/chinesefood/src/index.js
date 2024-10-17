import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import FoodCard from './component/FoodCard/FoodCard.js';
import FoodItems from './component/FoodItems/FoodItems.js';
import FoodItemForm from './component/FoodForm/FoodForm.js';
import { getById } from './model/http.js';
import HeaderL from './component/header/HeaderL.js';
import AdminLogin from './component/AdminLogin/AdminLogin.js';
import { Provider } from 'react-redux';
import store from './react-redux/store.js';
import ProtectedRoutes from './ProtectedRoutes.js';


const childroutes = [
  {
    path: '/foodItems',
    element: <FoodItems />
  },
  {
    path: '/',
    element: <HeaderL />
  },
  {
    path: 'addFoodItem',
    element: <FoodItemForm />
  },
  {
    path: 'updatefood/:id',
    element: <ProtectedRoutes><FoodItemForm /></ProtectedRoutes>,
    loader: ({ params }) => {
      return getById(params.id)
    }
  }, {
    path: '/adminlogin',
    element: <AdminLogin />
  }
];

const reactrouter = [
  {
    path: '/',
    element: <App />,
    children: childroutes
  }

];

const food = createBrowserRouter(reactrouter)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={food} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
