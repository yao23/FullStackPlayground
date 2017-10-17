import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = ({
    onSubmit,
    onChange,
    errors,
    user
}) => (
    <div className='container'>
        <div className='card-panel login-panel'>
        <form action="/" className='col s12' onSubmit={onSubmit}>
            <h4 className='center-align'>Login</h4>
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
            {errors.password && 
            <div className='row'>
            <p className='error-message'>{errors.password}</p>
            </div>}

            <div className='row right-align'>
            <input className='waves-effect waves-light btn indigo lighten-1' type="submit" value='Log in' />
            </div>

            <div className='row'>
            <p className='right-align'>New to Tap News? <a href='/signup'>Sign up now</a></p>
            </div>

        </form>
        </div>
    </div>
);

LoginForm.PropTypes = {
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    errors: PropTypes.func.isRequired,
    user: PropTypes.func.isRequired
};

export default LoginForm;