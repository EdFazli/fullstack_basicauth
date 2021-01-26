import React, { useState } from "react";
import { Auth } from "aws-amplify";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import ConfirmSignUp from './ConfirmSignUp';
import ForgotPassword from "./ForgotPassword";
import ForgotPasswordSubmit from './ForgotPasswordSubmit';

async function signIn({ username, password }, setUser) {
    try {
        const user = await Auth.signIn(username, password)
        const userInfo = { username: user.username, ...user.attributes }
        setUser(userInfo)
    } catch(err) {
        console.log("error signing up..", err)
    }
}

async function signUp({ username, password, email }, updateFormType) {
    try {
        await Auth.signUp({
            username, password, attributes: { email }
        })
        console.log("sign in success!")
        updateFormType("confirmSignUp")
    } catch (err) {
        console.log("error signing up..", err)
    }
}

async function confirmSignUp({ username, confirmationCode }, updateFormType) {
    try {
        await Auth.confirmSignUp(username, confirmationCode)
        updateFormType("signIn")
    } catch (err) {
        console.log("error signing up..", err)
    }
}

async function ForgotPassword({ username}, updateFormType) {
    try {
        await Auth.forgotPassword(username)
        updateFormType("forgotPasswordSubmit")
    } catch (err) {
        console.log("error submitting username to reset password...", err)
    }
}

async function forgotPasswordSubmit({ username, confirmationCode, password }, updateFormType) {
    try {
        await Auth.forgotPasswordSubmit(username, confirmationCode, password)
        updateFormType("signIn")
    } catch (err) {
        console.log("error updating password...", err)
    }
}

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

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        marginTop: 150,
        justifyContent: "center",
        alignItems: "center"
    },
    input: {
        height: 45,
        marginTop: 8,
        width: 300,
        maxWidth: 300,
        padding: "0px 8px",
        fontSize: 16,
        outline: "none",
        border: "none",
        borderBottom: "2px solid rgba(0, 0, 0, .3)"
    },
    toggleForm: {
        fontWeight: "600",
        padding: "0px 25px",
        marginTop: "15px",
        marginBottom: 0,
        textAlign: "center",
        color: "rgba(0, 0, 0, 0.6)"
    },
    resetPassword: {
        marginTop: "5px",
    },
    anchor: {
        color: "#006bfc",
        cursor: "pointer"
    }
}

export {styles, Form as default}