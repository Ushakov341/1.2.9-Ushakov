import React from 'react';
import './App.css';
import Input from './components/Input';

const App = () => {
  return (
    <>
      <Input
        labelText="Имя пользователя"
        id="user_name"
        type="text"
        placeholder="Введите ваше имя"
        className="field"
      />
        <Input
        labelText="Email"
        id="email"
        type="email"
        placeholder="Введите ваш email"
        className="field"
      />
        <Input
        labelText="Пароль"
        id="password"
        type="password"
        placeholder="Введите ваш пароль"
        className="field"
      />
    </>
  );
};

export default App;
