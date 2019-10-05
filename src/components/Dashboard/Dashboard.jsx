import React, { Component } from 'react';
import shortid from 'shortid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from './Dashboard.module.css';
import Controls from './Controls/Controls';
import Balance from './Balance/Balance';
import TransactionHistory from './TransactionHistory/TransactionHistory';

class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    inputValue: '',
  };

  handleChangeInput = ({ target }) => {
    const { value } = target;
    if (value.includes('-')) {
      this.notifyIncorrectInput();
    } else {
      this.setState({ inputValue: value });
    }
  };

  handleSubmit = evt => {
    const { balance, inputValue } = this.state;
    const { name } = evt.target;

    evt.preventDefault();
    let newBalance = 0;
    if (Number(inputValue) === 0) {
      this.notifyNotSum();
    } else if (name === 'deposit') {
      newBalance = balance + Number(inputValue);
      this.handleSubmitSetState(newBalance, name, inputValue);
    } else if (name === 'withdraw') {
      if (Number(inputValue) > balance) {
        this.notifyNoMoney();
      } else {
        newBalance = balance - Number(inputValue);
        this.handleSubmitSetState(newBalance, name, inputValue);
      }
    }
  };

  notifyNoMoney = () =>
    toast('На счету недостаточно средств для проведения операции!');

  notifyNotSum = () => toast('Введите сумму для проведения операции!');

  notifyIncorrectInput = () => toast('Сумма не должна быть отрицательной!');

  handleSubmitSetState = (newBalance, name, inputValue) => {
    this.setState(
      prevState => ({
        balance: newBalance,
        inputValue: '',
        transactions: [
          ...prevState.transactions,
          {
            id: shortid.generate(),
            type: name,
            amount: inputValue,
            date: new Date().toLocaleString('en-GB'),
          },
        ],
      }),
      this.changeBalance,
    );
  };

  changeBalance = type => {
    const { transactions } = this.state;

    return transactions.reduce(
      (acc, el) => (el.type === type ? acc + Number(el.amount) : acc),
      0,
    );
  };

  render() {
    const { transactions, balance, inputValue } = this.state;

    return (
      <div className={style.dashboard}>
        <Controls
          inputValue={inputValue}
          handleChangeInput={this.handleChangeInput}
          handleSubmit={this.handleSubmit}
        />
        <Balance balance={balance} changeBalance={this.changeBalance} />
        <TransactionHistory transactions={transactions} />
        <ToastContainer />
      </div>
    );
  }
}

export default Dashboard;
