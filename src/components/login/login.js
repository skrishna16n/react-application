import React from 'react';
// import PropTypes from 'prop-types';
import fdrecp from './../../assets/images/Screen Shot 2020-07-22 at 11.32.18 AM.png'
import './login.css';
import { Link } from 'react-router-dom'

function navigateToSignUp() {
  return <Link to={'/sign-up'} />
}

const login = () => (
  <div className="login">
    <div style={{ textAlign: "center" }}>
      <img src={fdrecp} style={{ marginTop: "50px", marginLeft: "20px" }} alt="..." />
    </div>
    <div>
      <form style={{ marginLeft: "200px", marginRight: "200px", marginTop: "100px", textAlign: "left" }}>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
            placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <div style={{ textAlign: "center" }}>
          <button type="submit" className="btn btn-primary" onClick={navigateToSignUp}>LogIn</button>
          <button type="signUp" style={{ marginLeft: "20px" }} className="btn btn-primary" onClick={navigateToSignUp}>SignUp</button>
        </div>
      </form>
    </div>
  </div>
);

login.propTypes = {};

login.defaultProps = {};

export default login;
