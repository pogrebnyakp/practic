import React from 'react';
import './Header.scss';

export const Header: React.FC = () => {
  return (
    <header className="page__section header">

      <div className="container">

        <div className="header__content">

          <ul className="header__list list">
            <li className="header__item">women</li>
            <li className="header__item">men</li>
            <li className="header__item">kids</li>
          </ul>

          <div className="header__logo">
          </div>

          <div className="header__busket">
            <select name="select" className="currency">
              <option value="value1">$ USD</option>
              <option value="value2">¥ JPY</option>
              <option value="value3">₤ UAH</option>
            </select>
            <div className="busket"></div>
          </div>

        </div>

      </div>

    </header>
  );
};
