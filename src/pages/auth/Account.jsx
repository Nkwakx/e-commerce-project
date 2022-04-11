import React from 'react';
import FormFields from '../../components/forms/FormFields';
import { useAuth } from './../../firebase/FirebaseAuthHook';
import { useNavigate } from 'react-router-dom';
import { RoutesObj } from './../../routers/AllRoutes';


export default function SignIn() {

  const { Login } = useAuth();
  // const { history } = useNavigate();

  let navigation = useNavigate();

  function submitSignIn(data) {
    if (!data.email || !data.password) {
      console.log("Sorry email or/and password is required")
    } else {
      console.log("Email and password recieved: ", data.email, data.password);

      Login(data.email, data.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("Sign in successfully!", user);

          // history.push(RoutesObj.home.path);
          navigation(RoutesObj.home.path);

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
      <FormFields title="Sign In" btn="Login" dataCatch={(email, password) => submitSignIn(email, password)} />
    </>
  )
}
