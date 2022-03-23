import React from 'react';
import FormFields from '../../components/FormFields';
import Authetication from '../layouts/Authetication';


export default function SignIn() {

  function submitSignIn(email, password) {
    console.log("email and password: ", email, password);
  }
  return (
    <>
      <Authetication />
      <FormFields title="Sign In" btn="Login" dataCatch={(email, password) => submitSignIn(email, password)} />
    </>
  )
}
