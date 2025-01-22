import React from 'react';
import ReactDOM from 'react-dom/client';  // Use the correct import for React 18
import{BrowserRouter} from 'react-router-dom';
import App from './components/App';

// Create a root and render the app
const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(

<BrowserRouter>
<App />
</BrowserRouter>,
);
