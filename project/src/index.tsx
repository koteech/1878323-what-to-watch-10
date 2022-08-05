import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {films} from './mocks/films';
import {filmReviews} from './mocks/reviews';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      films={films}
      filmReviews={filmReviews}
    />
  </React.StrictMode>,
);
