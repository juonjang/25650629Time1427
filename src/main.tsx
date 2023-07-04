import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { useDispatch ,Provider} from 'react-redux'

import { createStore, applyMiddleware, Middleware } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import logger from "redux-logger";
import dotenv from "dotenv";

 let middlewares: Middleware[] = [thunk];

// if (process.env.REACT_APP_IS_PRODUCTION != "1") {
//   middlewares.push(logger);
// }





// export type AppDispatch = typeof store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
