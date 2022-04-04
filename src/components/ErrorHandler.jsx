import React from 'react'

export default function ErrorHandler(event) {

    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    const validEmailRegex =
        RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);

    switch (name) {
        case 'fullName':
            errors.fullName =
                value.length < 5
                    ? 'Full Name must be 5 characters long!'
                    : '';
            break;
        case 'email':
            errors.email =
                validEmailRegex.test(value)
                    ? ''
                    : 'Email is not valid!';
            break;
        case 'password':
            errors.password =
                value.length < 8
                    ? 'Password must be 8 characters long!'
                    : '';
            break;
        default:
            break;
    }

    this.setState({ errors, [name]: value }, () => {
        console.log(errors)
    })


    return (
        <div>ErrorHandler</div>
    )
}