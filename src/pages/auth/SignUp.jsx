import React from 'react'
import { useNavigate } from 'react-router-dom';
import FormFields from '../../components/forms/FormFields';
import { useAuth } from '../../firebase/FirebaseAuthHook';
import { RoutesObj } from '../../routers/AllRoutes';
//import { Register, CreateNewUser } from '../../firebase/FirebaseAuth';
import Authetication from '../layouts/Authetication';


export default function SignUp() {

  const { Register, CreateNewUser } = useAuth();
  let navigation = useNavigate();

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
            .then(() => {
              navigation(RoutesObj.home.path);
            })

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

