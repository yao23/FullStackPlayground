import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            errors: {
                summary: 'summary error',
                email: 'email error',
                password: 'password error'
            },
            user: {
                email: '',
                password: ''
            }
        };

        this.processForm = this.processForm.bind(this);
        this.changeUser = this.changeUser.bind(this);
    }

    processForm(event) {
        event.preventDefault();

        const email = this.state.user.email;
        const password = this.state.user.password;

        console.log('email:', email);
        console.log('password:', password);

        //TODO: send login data
    }

    changeUser(event) {
        const field = event.target.name;
        const user = this.state.user;
        user[field] = event.target.value;

        this.setState({user});
    }

    render() {
        return (
            <LoginForm 
                onSubmit={this.processForm}
                onChange={this.changeUser}
                errors={this.state.errors}
                user={this.state.user}
            />
        )
    }
}

export default LoginPage;