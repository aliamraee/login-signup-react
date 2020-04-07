import React from 'react';
import { Link } from "react-router-dom"

import formHook from './../Hooks/formHook';
import './auth.css'
import Img from './../assets/images/download.webp'

import Pass from '../assets/icon/locked-padlock.svg'
import User from '../assets/icon/user.svg'
import Google from '../assets/icon/brands-and-logotypes.svg'



const SignIn = () => {

    const sign = () => {
        console.log("You are logged in.");
        console.log(inputs);
    }
    const initialValue = {
        userName: '', password: ''
    }
    const { handleSubmit, handleInputChange, inputs } = formHook(initialValue, sign)


    return (
        <section className="sign-in">
            <div className="container">
                <div className="signin-content">
                    <div className="signin-image">
                        <figure><img src={Img} alt="sing up image" /></figure>
                        <Link to="/" className="signup-image-link">Create an account</Link>
                    </div>
                    <div className="signin-form">
                        <h2 className="form-title">Sign up</h2>
                        <form onSubmit={handleSubmit} className="register-form" >
                            <div className="form-group">
                                <label ><img className="icon" src={User} /></label>
                                <input onChange={handleInputChange} value={inputs.userName} type="text" name="userName" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label><img className="icon" src={Pass} /></label>
                                <input onChange={handleInputChange} type="password" name="password" value={inputs.password} placeholder="Password" required />
                            </div>
                            <div className="form-group">
                                <input type="checkbox" className="agree-term" />
                                <label className="label-agree-term"><span><span></span></span>Remember me</label>
                            </div>
                            <div className="form-group form-button">
                                <input type="submit" id="signin" className="form-submit" value="Log in" />
                            </div>
                        </form>
                        <div className="social-login">
                            <span className="social-label">Or login with</span>
                            <ul className="socials">
                                <li><Link to="/" className="display-flex-center google"><img src={Google} /></Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SignIn;
