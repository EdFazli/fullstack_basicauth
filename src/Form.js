import React, { useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

const initialFormState = {
    username: '', password: '', email: '', confirmationCode: ''
}

function Form(props) {
    const [formType, updateFormType] = useState("signIn")
    const [formState, updateFormState] = useState(initialFormState)
    function renderForm() {}
    return (
        <div>
            {renderForm()}
        </div>
    )
}