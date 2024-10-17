import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './app/App';
import reportWebVitals from './reportWebVitals';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Employee from './component/Learning/Employee1/Employee.js';
import EmployeeForm from './component/EmployeeForm/Employeeform.js';
import { getAllEmployee, getEmployeeById, updateEmployee } from './model/http.js';
import { FileUpload } from './component/Learning/Employee1/FileUpload/Fileupload.js';
import { Provider } from 'react-redux';
import store from './react-redux/store.js';
import { AdminLogin } from './component/Admin/AdminLogin.js';

const childRouter = [
  {
    path: '/employees',
    element: <Employee />,
    loader: async () => {
      return await getAllEmployee();
    }
  },
  {
    path: 'edit/employee/:_id',
    element: <EmployeeForm />,
    loader: async ({ params }) => {
      return await getEmployeeById(params._id);
    }
  },
  {
    path: 'addEmployee',
    element: <EmployeeForm />
  }, 
  {
    path:'adminlogin',
    element:<AdminLogin/>
  },
  {
    path: 'editpic/:_id',
    element: <FileUpload></FileUpload>
  }
]

const rootRouter = [
  {
    path: '/',
    element: <App />,
    children: childRouter
  }
];

const emprouter = createBrowserRouter(rootRouter);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <Provider store={store}>
    <RouterProvider router={emprouter} />

  </Provider>
);

reportWebVitals();
