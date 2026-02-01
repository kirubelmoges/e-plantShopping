// main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'; // Import Provider to connect Redux
import store from './store.js';         // Import your configured Redux store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>  {/* Wrap App with Provider */}
    <App />
  </Provider>
);
