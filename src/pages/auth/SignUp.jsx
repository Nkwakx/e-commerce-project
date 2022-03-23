import React from 'react'
import FormFields from '../../components/FormFields';
import Authetication from '../layouts/Authetication';


export default function SignUp() {


  function submitSignUp(email, password) {
    console.log("email and password: ", email, password);
  }

  return (
    <>
      <Authetication />
      <FormFields title="Sign Up" btn="Register" dataCatch={(email, password) => submitSignUp(email, password)} />
    </>
  )
}
