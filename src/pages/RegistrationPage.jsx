import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import operations from '../redux/auth/authOperations';

const RegistrationPage = () => {
  const [user, setUser] = useState({});
  const dispatch = useDispatch();

  const onInputChange = ({ target }) => {
    setUser(prevState => ({ ...prevState, [target.name]: target.value }));
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(user);
    dispatch(operations.registration(user));
  };

  return (
    <>
      <h2>RegistrationPage</h2>
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          onChange={onInputChange}
          placeholder="Name"
        />
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
    </>
  );
};

export default RegistrationPage;
