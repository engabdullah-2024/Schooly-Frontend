import React from 'react'; // ✅ Required for JSX
import ReactDOM from 'react-dom/client'; // ✅ React 18+
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
