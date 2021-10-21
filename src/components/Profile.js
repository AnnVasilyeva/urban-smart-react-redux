import React, {Component} from 'react';
import './profile.css';

export class Profile extends Component {
  render() {
    return (
      <h1 className='welcome-title'>Welcome <span>{this.props.login}</span></h1>
    )
  }
}

export default Profile;
