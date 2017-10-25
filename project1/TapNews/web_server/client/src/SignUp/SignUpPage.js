import React from 'react';

import SignUpForm from './SignUpForm';
import PropTypes from 'prop-types';

class SignUpPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            errors: {},
            user: {
                email: '',
                password: '',
                confirm_password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;
        const confirm_password = this.state.user.confirm_password;

        console.log('email:', email);
        console.log('password:', password);
        console.log('confirm_password:', confirm_password);

        if (password !== confirm_password) {
            return;
        }

        // Post signup data.
    fetch('http://localhost:3000/auth/signup', {
        method: 'POST',
        cache: false,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.state.user.email,
          password: this.state.user.password
        })
    }).then(response => {
        if (response.status === 200) {
            this.setState({
                errors: {}
            });
  
            // change the current URL to /login, easy to auth with token
            this.context.router.replace('/login');
        } else {
            response.json().then(function(json) {
                console.log(json);
                const errors = json.errors ? json.errors : {};
                errors.summary = json.message;
                console.log(this.state.errors);
                this.setState({errors});
            }.bind(this));
        }
      });  
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});

        const errors = this.state.errors;        
        if (this.state.user.password !== this.state.user.passwordConfirm) {
            errors.password = "Password and Confrim Password don't match";
        } else { // clear previous error message
            errors.password = '';
        }
        this.setState({errors});
    }

    render() {
        return (
            <SignUpForm 
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        )
    }
}

// To make react-router work
SignUpPage.contextTypes = {
    router: PropTypes.object.isRequired
};

export default SignUpPage;