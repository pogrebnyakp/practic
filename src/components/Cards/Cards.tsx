import React from 'react';
import './Cards.scss';
import '../../pictures/Product__A__bag.png';

export const Cards: React.FC = () => {
  return (
    <main>

      <section className="page__section cards">
        <div className="container">

          <h1 className="cards__title">Category name</h1>

          <ul className="cards__list list">
            <li className="cards__item card">
              <img src="Product__A__bag.png" alt="bag" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
            <li className="cards__item card">
              <img src="" alt="" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
            <li className="cards__item card">
              <img src="" alt="" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
            <li className="cards__item card">
              <img src="" alt="" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
            <li className="cards__item card">
              <img src="" alt="" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
            <li className="cards__item card">
              <img src="" alt="" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>
            </li>
          </ul>

        </div>
      </section>
    </main>
  );
};
