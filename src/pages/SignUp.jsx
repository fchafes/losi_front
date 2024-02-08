import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux'; // Importing useDispatch
import { setUser } from '../redux/customerReducer';
import "./SignUp.css";

const Signup = () => {
  const dispatch = useDispatch(); // Initializing useDispatch

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/customers', formData);
      console.log('Signup successful:', response.data);

      // Dispatch setUser action to save user data in Redux state
      dispatch(setUser({ user: response.data, token: response.data.token }));
    } catch (error) {
      console.error('Signup error:', error);
      // Handle signup failure if needed
    }
  };

  return (
    <div className='signup-container'>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="firstname" value={formData.firstname} onChange={handleChange} placeholder="First Name" required />
        <input type="text" name="lastname" value={formData.lastname} onChange={handleChange} placeholder="Last Name" required />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
        <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" required />
        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
        <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Signup;
