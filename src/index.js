import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './containers/App';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ margin: '1rem' }}>
      <App />
    </div>
  </React.StrictMode>
);
