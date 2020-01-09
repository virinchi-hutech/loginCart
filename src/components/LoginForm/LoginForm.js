import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './LoginForm.css'
// RCJC
import history from '../../history'
class LoginForm extends Component {
    constructor(props) {
        super(props)
        console.log(this.props);
        
    }
    navigateToAdmin(){
      history.push('admin')
    }
    render() {
        return (
            <div className=" my-1  py-3  bg-white">
  {/*Section: Content*/}
  <section className="px-md-1 mx-md-5 text-center text-lg-left dark-grey-text">
    {/*Grid row*/}
    <div className="row d-flex justify-content-center">
      {/*Grid column*/}
      <div className="col d-fixed">
        {/* Default form login */}
        <form className="text-center" action="#!">
          <p className="h4 mb-4" >Login</p>
          {/* Email */}
          <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="Username" />
          {/* Password */}
          <input type="password" id="defaultLoginFormPassword" className="form-control mb-4" placeholder="Password" />
          <div className="d-flex justify-content-around">
            <div>
              {/* Remember me */}
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="defaultLoginFormRemember" />
                <label className="custom-control-label px11Text" htmlFor="defaultLoginFormRemember">Keep me Signed in</label>
              </div>
            </div>
            <div>
              {/* Forgot password */}
              <a href className="px11Text">Forgot your password?</a>
            </div>
          </div>
          {/* Sign in button */}
          <button className="btn btn-info btn-block my-4" onClick={this.navigateToAdmin}>Sign in</button>
          {/* Register */}
          <p className="px11Text">Don't Have Account? 
            <a href> Sign up</a>
          </p>
          {/* Social login */}
          
        </form>
        {/* Default form login */}
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
  </section>
  {/*Section: Content*/}
</div>
        )
    }
}

LoginForm.propTypes = {

}

export default LoginForm