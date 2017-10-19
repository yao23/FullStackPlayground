import React from 'react';

import SignUpForm from './SignUpForm';

class SignUpPage extends React.Component {
    constructor(props) {
        super(props);

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

        //TODO: send signup data
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

export default SignUpPage;