import { Component } from "react";

class AdminRegister extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChangeText = (e) => {
    // console.log(e.target.id);
    this.setState({
      [e.target.id]: e.target.value,
      password: e.target.value,
    });
  };
  handleRegisterSubmit = () => {
    console.log("email : ", this.state.email);
    console.log("password : ", this.state.password);

    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  render() {
    return (
      <>
        <div className="container mt-5">
          <div className="register">
            <h2>Register</h2>
            <input
              type="text"
              placeholder="Email"
              onChange={this.handleChangeText}
              id="email"
            />
            <input
              type="password"
              placeholder="Password"
              onChange={this.handleChangeText}
              id="password"
            />
          </div>
          <div className="submit mt-1">
            <button onClick={this.handleRegisterSubmit}>Submit</button>
          </div>
        </div>
      </>
    );
  }
}

export default AdminRegister;
