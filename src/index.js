import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
//setup router-dom
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Index from './pages/Index/Index.jsx';
import Detail from './pages/Detail/Detail';
//setup toolkit
import { Provider } from 'react-redux';
import { store } from './redux/configStore';
//scss
import "./assets/scss/style.scss"
import Search from './pages/Search/Search';
import Carts from './pages/Carts/Carts';
import Register from './pages/Register/Register';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
    <Routes>
      <Route path='' element={<App />}>
        <Route index element={<Index />}></Route>
        <Route path='/Carts' element={<Carts/>}></Route>
        <Route path='/search' element={<Search/>}></Route>
        <Route path='/Register' element={<Register />}></Route>
          <Route path='detail' element={<Detail />}>
            <Route path=":id" element={<Detail />}></Route>
          </Route>  
      </Route>
    </Routes>
    </BrowserRouter>
  </Provider>
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
