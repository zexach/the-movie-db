import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { PaginationContextProvider } from './context/PaginationContext';
import { SearchContextProvider } from './context/SearchContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <SearchContextProvider>
      <PaginationContextProvider>
        <App />
      </PaginationContextProvider>
    </SearchContextProvider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
