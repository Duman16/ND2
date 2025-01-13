import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  const onSubmit = (data) => {
    const newUser = { username: data.username, password: data.password };
    setUsers([...users, newUser]);
    localStorage.setItem('users', JSON.stringify([...users, newUser]));
    alert('Registration successful');
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Регистрация</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border rounded shadow-sm bg-light">
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Логин</label>
          <input
            {...register('username', { required: true })}
            id="username"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Пароль</label>
          <input
            {...register('password', { required: true })}
            type="password"
            id="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Подтвердите пароль</label>
          <input
            {...register('confirmPassword', { required: true })}
            type="password"
            id="confirmPassword"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
    </div>
  );
};

export default RegisterForm;