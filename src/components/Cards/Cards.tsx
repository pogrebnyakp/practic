import React from 'react';
import './Cards.scss';
import Product__A__bag from '../../pictures/Product__A__bag.png';
import Product__B__blouse from '../../pictures/Product__B__blouse.png';
import Product__C__jamper from '../../pictures/Product__C__jamper.png';
import Product__D__sweater from '../../pictures/Product__D__sweater.png';

export const Cards: React.FC = () => {
  return (
    <main>

      <section className="page__section cards">
        <div className="container">

          <h1 className="cards__title">Category name</h1>

          <ul className="cards__list list">
            <li className="cards__item card">

              <img src={Product__A__bag} alt="bag" className="card__img" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>

            </li>
            <li className="cards__item card">

              <img src={Product__B__blouse} alt="blouse" className="card__img" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>

            </li>
            <li className="cards__item card">

              <img src={Product__C__jamper} alt="jamper" className="card__img" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>

            </li>
            <li className="cards__item card">

              <img src={Product__D__sweater} alt="sweater" className="card__img" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>

            </li>
            <li className="cards__item card">

              <img src={Product__A__bag} alt="bag" className="card__img" />
              <article className="card__description">
                <p className="card__name list">Apollo Running Short</p>
                <p className="card__price list">$50.00</p>
              </article>

            </li>
            <li className="cards__item card">

              <img src={Product__C__jamper} alt="jamper" className="card__img" />
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
