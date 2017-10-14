import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import React from 'react';

import logo from './logo.png';

import './App.css';
import NewsPanel from '../NewsPanel/NewsPanel';
import LoginPage from '../Login/LoginPage';

class App extends React.Component {
    render() {
        return (
            <div>
                <img className='logo' src={logo} alt='logo image' />
                <div className='container'>
                    <LoginPage />
                </div>
            </div>    
        )
    }
}

export default App;