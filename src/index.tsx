import ReactDOM from 'react-dom/client';
import * as React from "react";
import './index.css';
import App from './App';
import { store } from './redux/store';
import { Provider } from 'react-redux'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Basket from './components/basket/basket';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "basket",
    element: <Basket/>,
  }
  
]);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <div className="container">
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </React.StrictMode>
  </div>
  
    
    
);

