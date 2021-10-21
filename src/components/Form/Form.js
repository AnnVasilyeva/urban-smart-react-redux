import React, {Component} from 'react';
import './form.css';
import {log} from '../../actions';
import { connect } from "react-redux";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      loginIsValid: false,
      passwordIsValid: false,
      formIsValid: false
    };
    
  }
  
  validateField = (fieldName, value) => {
    let loginIsValid = this.state.loginIsValid;
    let passwordIsValid = this.state.passwordIsValid;

    switch(fieldName) {
      case 'login':
        loginIsValid = (value === 'developer21')
        break;
      case 'password':
        passwordIsValid = (value === '123456')
        break;
      default:
        break;
    }
    this.setState({
      loginIsValid: loginIsValid,
      passwordIsValid: passwordIsValid
    }, this.validateForm);
  }

  validateForm = () => {
    this.setState({formIsValid: this.state.loginIsValid &&
      this.state.passwordIsValid});
  }


  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, 
                () => { this.validateField(name, value) });
  }


  onSubmitForm = (e) => {
    e.preventDefault();
    this.props.dispatch(log(this.state.login));
    this.props.getProfilePage(this.props.history);
    this.setState({
      login: '',
      password: '',
      loginIsValid: false,
      passwordIsValid: false,
      formIsValid: false
    })
  }

  render() {
    const {login, password, formIsValid} = this.state;
    return (
      <form className='login-form' onSubmit={this.onSubmitForm}>
        <fieldset>
          <label htmlFor='login'>Login</label>
          <input id='login' type='text' name='login' value={login} onChange={this.handleInputChange}/>
        </fieldset>
        <fieldset>
          <label htmlFor='password'>Password</label>
          <input id='password' type='password' name='password' value={password}
          onChange={this.handleInputChange}/> 
        </fieldset>
        <button type='submit' disabled={!formIsValid}>Login</button>        
      </form>
    )
  }
  
}

const mapStateToProps = (state) => {
  return {login: state.login}
}



export default connect(mapStateToProps)(Form);