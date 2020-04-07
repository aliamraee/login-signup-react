import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import Img from './../assets/images/signup-image.webp'
import './auth.css'
import useForm from './../Hooks/formHook';

import Pass from '../assets/icon/locked-padlock.svg'
import Email from '../assets/icon/envelope.svg'
import User from '../assets/icon/user.svg'

const SignUp = () => {


    const sign = () => {
        console.log("You have registered.");
        console.log(inputs);
        
    }
    const initialValue = {
        fullName: '', email: '', password: ''
    }
    const { handleSubmit, handleInputChange, inputs } = useForm(initialValue, sign)


    return (
        <div className="main">
            <section className="signup">
                <div className="container">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign up</h2>
                            <form className="register-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label><img className="icon" src={User} /></label>
                                    <input onChange={handleInputChange} value={inputs.fullName} type="text" name="fullName" placeholder="Your Name" required />
                                </div>
                                <div className="form-group">
                                    <label><img className="icon" src={Email} /></label>
                                    <input onChange={handleInputChange} value={inputs.email} type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="form-group">
                                    <label><img className="icon" src={Pass} /></label>
                                    <input onChange={handleInputChange} value={inputs.password} type="password" name="password" placeholder="Password" required />
                                </div>
                                <div className="form-group form-button">
                                    <input type="submit" name="signup" id="signup" className="form-submit" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div className="signup-image">
                            <figure><img src={Img} alt="sing up image" /></figure>
                            <Link to="/signin" className="signup-image-link">I am already member</Link>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    );
}

export default SignUp;
