import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password:""
    };
  }
  handleSubmit = (event)=>{
    event.preventDefault()
    if(this.state.username.length>0 && this.state.password.length>0){
      this.props.onSubmit(this.state)
    }
  }

  handleUsernameChange = ({target:{value:username}})=>{
    this.setState({
      username
    })
  }

  handlePasswordChange = ({target:{value:password}})=>{
    this.setState({
      password
    })
  }
  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleUsernameChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
