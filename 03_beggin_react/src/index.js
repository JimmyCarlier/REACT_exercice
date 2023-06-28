import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ArticleList from './ArticleList';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <div class="containerOfVoyage">
    <ArticleList />
    </div>
  </React.StrictMode>
);


