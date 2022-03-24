import React from 'react'
import FormFields from '../../components/FormFields';
import { Register, CreateNewUser } from '../../firebase/FirebaseAuth';
import Authetication from '../layouts/Authetication';


export default function SignUp() {


  function submitSignUp(data) {
    if (!data.email || !data.password) {
      console.log("Sorry email or/and password is required")
    } else {
      console.log("Email and password recieved: ", data.email, data.password);
      Register(data.email, data.password)
        .then((userCredential) => {

          const user = userCredential.user;
          console.log("Sign up a success has been recieved:", user);
          CreateNewUser(user.uid, user)

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
      <FormFields title="Sign Up" btn="Register" dataCatch={(email, password) => submitSignUp(email, password)} />
    </>
  )
}

