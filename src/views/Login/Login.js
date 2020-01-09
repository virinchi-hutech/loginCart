import React, { Component } from 'react'
import PropTypes from 'prop-types'
import css from './Login.css'
import LoginForm from '../../components/LoginForm/LoginForm'

class Login extends Component {
    constructor(props) {
        super(props)

    }

    componentWillMount() {

    }

    componentDidMount() {

    }

    componentWillReceiveProps(nextProps) {

    }

    shouldComponentUpdate(nextProps, nextState) {

    }

    componentWillUpdate(nextProps, nextState) {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div class="form">
            <div class="logoContainer">
                <img srcset="src/images/1-copy.png" class="-copy"/>
            </div>
            <div class="image">
                <img
     srcset="src/images/group-4.png"
     class="Group-4"/>
            </div>
            <div class="loginCard">
                <LoginForm/>
            </div>
            <div class="footer">
                <p className="text-center text-white">© MEH JV Online Ordering System, 2019</p>
            </div>
        </div>

        )
    }
}

Login.propTypes = {

}

export default Login