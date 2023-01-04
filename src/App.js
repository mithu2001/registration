import React, { Component } from 'react'
import "./App.css";
import Register from "./Components/Register";
import Greet from "./Components/Greet";

class App extends Component {
constructor(props) {
  super(props);

  this.state = {
     isRegister: false,
     name:null,
     email:null,
     password:null,
  }
}

registerationHandler = (event) => {
  
event.preventDefault();//it stops the reloading of a form
const name = event.target.name.value;
const email = event.target.email.value;
const password = event.target.password.value;
this.setState({name, email, password, isRegister:true})
}

  render() {
    return (
      <div>
        {this.state.isRegister?(<Greet username = {this.state.name} useremail = {this.state.email}/>):(<Register submit = {this.registerationHandler}/>)}
      </div>
    )
  }
}

export default App
