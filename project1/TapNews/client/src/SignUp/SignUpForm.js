import React from 'react';
import PropTypes from 'prop-types';
import './SignUpForm.css';

const SignUpForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
  <div className='container'>
    <div className='card-panel signup-panel'>
      <form action="/" className='col s12' onSubmit={onSubmit}>
        <h4 className='center-align'>Sign up</h4>
        {errors.summary && 
        <div className='row'>
          <p className='error-message'>{errors.summary}</p>
        </div>}

        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' id='email' type="email" name='email' onChange={onChange} />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        {errors.email && 
        <div className='row'>
          <p className='error-message'>{errors.email}</p>
        </div>}
        
        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' id='password' type="password" name='password' onChange={onChange} />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field col s12'>
            <input className='validate' id='passwordConfirm' type="password" name='passwordConfirm' onChange={onChange} />
            <label htmlFor="password">Confirm Password</label>
          </div>
        </div>
        {errors.password && 
        <div className='row'>
          <p className='error-message'>{errors.password}</p>
        </div>}


        <div className='row right-align'>
          <input className='waves-effect waves-light btn indigo lighten-1' type="submit" value='Sign up' />
        </div>

        <div className='row'>
          <p className='right-align'>Already a user? <a href='/login'>Login</a></p>
        </div>

      </form>
    </div>
  </div>
);

SignUpForm.PropTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.func.isRequired,
  user: PropTypes.func.isRequired,
};

export default SignUpForm;