import React from 'react'
import FormFields from '../../components/forms/FormFields';
import Authetication from '../layouts/Authetication';


export default function ResetPassword() {

  function submitReset(email, password) {
    console.log("email and password: ", email, password);
  }

  return (
    <>
      <Authetication />
      <FormFields title="Reset Password" btn="Submit" dataCatch={(email, password) => submitReset(email, password)} />
    </>
  )
}
