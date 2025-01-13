import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === data.username && user.password === data.password);

    if (user) {
      dispatch(login());
      navigate('/main');
    } else {
      alert('Неверные данные');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Авторизация</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Логин</label>
          <input
            {...register('username', { required: true })}
            id="username"
            className="form-control"
            placeholder="Введите логин"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Пароль</label>
          <input
            {...register('password', { required: true })}
            id="password"
            type="password"
            className="form-control"
            placeholder="Введите пароль"
          />
        </div>
        <button type="submit" className="btn btn-primary w-100 mb-3">Войти</button>
        <button type="button" className="btn btn-secondary w-100" onClick={() => navigate('/register')}>
          Регистрация
        </button>
      </form>
    </div>
  );
};

export default LoginForm;