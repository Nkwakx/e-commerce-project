import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import { FaUser } from 'react-icons/fa';
import { CreateNewUser, SignInWithGoogle } from './../firebase/FirebaseAuth';
import { SignInUnknown } from './../firebase/FirebaseAuth';

export default function FormFields(props) {

    const { btn, title, dataCatch = () => { } } = props;
    let errCreate = { email: "", password: "", confirmationPassword: "" }

    const [frmValues, setFrmValue] = useState(errCreate);
    const [frmErrors, setFrmError] = useState({});


    useEffect(() => {
    }, [frmValues]);


    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFrmValue({ ...frmValues, [name]: value });
        errorHandler(e);
    };
    const submitHandler = (e) => {
        e.preventDefault();
        if (!frmValues) return;
        setFrmValue("");
    }
    function GoogleSignIn() {
        SignInWithGoogle()
            .then((result) => {
                const user = result.user;
                console.log("Sign in/up success ", user);
                CreateNewUser(user.uid, user);
                
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error ", errorCode, errorMessage);
            });
    }

    function SignAnonymously() {
        SignInUnknown()
            .then(() => {
                console.log("Happy yay!");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("Error:", errorCode, errorMessage);
            });
    }
    const errorHandler = (errors) => {

        const { name, value } = errors.target;

        const validEmailRegex =
            RegExp(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

        switch (name) {

            case 'email':

                if (!value) {
                    errCreate.email = "Please enter email address.";
                }
                errCreate.email = validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
                break;

            case 'password':

                if (!value) {
                    errCreate.password = "Please enter Password.";
                }
                errCreate.password =
                    value.length >= 8
                        ? ''
                        : 'Password must be 8 characters long!';
                break;

            case 'confirmationPassword':

                if (!value) {
                    errCreate.confirmationPassword = "Please enter Confirm Password.";
                } else if (frmValues.password && value !== frmValues.password) {
                    errCreate.confirmationPassword = "Password and Confirm Password does not match.";
                }
                break;

            default:
                break;
        }


        console.log("ERRORS errorHandler", errCreate)
        return setFrmError(errCreate);

    }

    return (
        <>
            <form className='auth-form' onSubmit={submitHandler}>
                <h3>{title}</h3>

                <div className="form-group form-focus">
                    <label className="focus-label" htmlFor="email">
                        <input name='email' type="email" id='email'
                            className="form-control" placeholder='Email'
                            onChange={changeHandler}
                            onBlur={errorHandler} />
                        <span>Email</span>
                    </label>
                    <p className='error'>{frmErrors.email}</p>
                </div>

                <div className="form-group form-focus">
                    <label className="focus-label" htmlFor="password">
                        <input name='password' type="password" id='password'
                            className="form-control" placeholder='Password'
                            onChange={changeHandler}
                            onBlur={errorHandler} />
                        <span>Password</span>
                    </label>
                    <p className='error'>{frmErrors.password}</p>
                </div>

                {title === "Sign In" ? "" : <div className="form-group form-focus">
                    <label className="focus-label" htmlFor="confirmationPassword">
                        <input name='confirmationPassword' type="password" id='confirmationPassword'
                            className="form-control" placeholder='Repeat Password'
                            onChange={changeHandler}
                            onBlur={errorHandler} />
                        <span>Confirm Password</span>
                        <p className='error'>{frmErrors.confirmationPassword}</p>
                    </label>
                </div>}

                {title === "Sign In" ? <div className='text-right'>
                    <NavLink to="/forgot">Forgot Password</NavLink>
                </div> : ''}

                <button className='btn-auth' type="button" onClick={() => dataCatch(frmValues)}>{btn}</button>

                {title === "Reset Password" ? <div className='text-right'>
                    <NavLink to="/signin"> Back to login page</NavLink></div> : <>
                    <div className="login-or">
                        <span className="or-line"></span>
                        <span className="span-or">or sign with</span>
                    </div>
                    <div className="social-login">
                        <button title='Google' onClick={() => GoogleSignIn()}><i className="auth-icon"><FcGoogle /></i></button>
                        <button title='Anonymously' onClick={() => SignAnonymously()}><i className="auth-icon"><FaUser /></i></button>
                    </div>
                    <div className='signup'>
                        {title === "Sign Up" ? <p>Already have accont? <NavLink to="/signin"> Log in</NavLink></p> :
                            <p>Don't have account? <NavLink to="/signup"> Sign Up</NavLink></p>}
                    </div>
                </>
                }

            </form>
        </>
    )
}
