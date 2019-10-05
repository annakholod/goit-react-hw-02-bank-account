import React from 'react';
import PropTypes from 'prop-types';
import style from './Balance.module.css';

const Balance = ({ balance, changeBalance }) => {
  const deposit = changeBalance('deposit');
  const withdraw = changeBalance('withdraw');
  const balanceFormat = balance.toLocaleString('ru-RU');
  const depositFormat = deposit.toLocaleString('ru-RU');
  const withdrawFormat = withdraw.toLocaleString('ru-RU');
  return (
    <section className={style.balance}>
      <p className={style.deposit}>
        <span>⬆ </span>
        {depositFormat}$
      </p>
      <p className={style.withdraw}>
        <span>⬇ </span>
        {withdrawFormat}$
      </p>
      <span>Balance: {balanceFormat}$</span>
    </section>
  );
};

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  changeBalance: PropTypes.func.isRequired,
};

export default Balance;
