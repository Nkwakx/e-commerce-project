import React from 'react';
import FormFields from '../../components/FormFields';
import Authetication from '../layouts/Authetication';
import { Login } from '../../firebase/FirebaseAuth';


export default function SignIn() {

  function submitSignIn(data) {
    if (!data.email || !data.password) {
      console.log("Sorry email or/and password is required")
    } else {
      console.log("Email and password recieved: ", data.email, data.password);

      Login(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign in successfully!", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("An error has occurred:", errorCode, errorMessage);
        });
    }

  }

  return (
    <>
      <Authetication />
      <FormFields title="Sign In" btn="Login" dataCatch={(email, password) => submitSignIn(email, password)} />
    </>
  )
}
