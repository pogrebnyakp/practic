import React from 'react';
import './App.scss';
import { Cards } from './components/Cards/Cards';
import { Header } from './components/Header/Header';

export const App: React.FC = () => {
  return (
    <body className="page page__content">
      <Header />
      <Cards />

    </body>
  );
};
