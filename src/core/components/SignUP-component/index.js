import React from "react";

class SignUpComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            name: "",
            user: {}
        };
    }

    isFormValid = () => {
        let errors = [];
        let error;


        if (this.isFormEmpty(this.state)) {
            error = { message: 'Fill in all fields' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else if (!this.isPasswordValid(this.state)) {
            error = { message: 'Password is invalid' };
            this.setState({ errors: errors.concat(error) });
            return false;
        }
        else {
            return true;
        }
    }

    isFormEmpty = ({ name, email, password }) => {
        return !name.length || !email.length || !password.length
    }

    isPasswordValid = ({ password }) => {
        if (password.length < 6) {
            return false;
        }

        else {
            return true
        };
    }

    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    handleNameChange = (event) => {
        this.setState({ name: event.target.value });
    };


    handleSumbit = (event) => {
        event.preventDefault();

        if (this.isFormValid()) {

            this.setState({ user: { name: this.state.name, email: this.state.email, password: this.state.password } });
            localStorage.setItem('user', JSON.stringify(this.state.user));
        } else {
            console.log("false")
        }
    }


    



    render() {
        // console.log(user);

        return (
            <div className="form" >
                <div className="form_content">
                    <form onSubmit={this.handleSumbit}>
                        <div className="content_wrapper">
                            <div className="inputTitle">Name</div>
                            <input
                                placeholder="Type the name"
                                className="input"
                                name="name"
                                onChange={this.handleNameChange}
                            ></input>
                            <div className="inputTitle">Email</div>
                            <input
                                placeholder="Type the email"
                                className="input"
                                name="email"
                                type="email"
                                onChange={this.handleEmailChange}
                            ></input>
                            <div className="inputTitle">Password</div>
                            <input
                                placeholder="Type the password"
                                className="input"
                                type="password"
                                name="password"
                                onChange={this.handlePasswordChange}
                            ></input>
                        </div>
                        <button type="submit" className="signButton">
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}



export default SignUpComponent;
