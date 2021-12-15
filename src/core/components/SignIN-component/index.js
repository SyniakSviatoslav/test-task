import React from "react";





class SignInComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            user: ""
        };
    }


    handleEmailChange = (event) => {
        this.setState({ email: event.target.value });
    };
    handlePasswordChange = (event) => {
        this.setState({ password: event.target.value });
    };
    
    handleSumbit = (event) => {
        event.preventDefault();

     
        this.state.email === this.state.user.email ?? this.state.password === this.state.user.password
         ? console.log("login") : console.log("please verify your email or password");

       
    }

   async componentDidMount(){
        this.setState({
            user: JSON.parse(localStorage.getItem('user'))
           });
    }




    render() {
       

        return (
            <div className="form" >
                <div className="form_content">
                    <form onSubmit={this.handleSumbit}>
                        <div className="content_wrapper">
                            <div className="inputTitle">Email</div>
                            <input
                                placeholder="Type the email"
                                className="input"
                                name="email"
                                onChange={this.handleEmailChange}
                            ></input>
                            <div className="inputTitle">Password</div>
                            <input
                                placeholder="Type the password"
                                className="input"
                                name="password"
                                onChange={this.handlePasswordChange}
                            ></input>
                        </div>
                        <button type="submit" className="signButton">
                            Sign In
                        </button>
                    </form>
                </div>
            </div>
        );
    }
}



export default SignInComponent;

