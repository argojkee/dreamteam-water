import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/authOperations';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setUser(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(user);
    dispatch(operations.logIn(user));
  };

  return (
    <>
      <h2>LoginPage</h2>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          onChange={onInputChange}
          placeholder="Email"
        />
        <input
          name="password"
          type="password"
          onChange={onInputChange}
          placeholder="Password"
        />
        <button type="submit">Register</button>
      </form>

      <Link to="/registration">Go to registration page</Link>
    </>
  );
};

export default LoginPage;
