import React, { useState } from "react";
import './App.css'
const FormValidation = () => {

    const [name, setName] = useState('');
    const [nameErr, setNameErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [contact, setContact] = useState('');
    const [contactErr, setContactErr] = useState('');
    const [validSuccess, setValidSuccess] = useState(false);

    const valChange = (e) => {
        if (e.target.id == 'name') {
            validateName(e.target.value);
        }
        if (e.target.id == "email") {
            validateEmail(e.target.value);
        }
        if (e.target.id == "contact") {
            validateContact(e.target.value);
        }
    }

    const validateName = (name) => {
        if (name.trim() === '') {
            setNameErr("*Full Name cannot be empty")
            setValidSuccess(false);
        }
        else if (!/^[A-Za-z\s]*$/.test(name)) {
            setNameErr("*No numbers or special characters are allowed.")
            setValidSuccess(false);
        }
        else {
            setNameErr('');
            setValidSuccess(true);
        }
        return validSuccess;
    }

    const validateEmail = (email) => {
        if (email.trim() === '') {
            setEmailErr("*E-mail cannot be empty.")
            setValidSuccess(false);
        }
        else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            setEmailErr('*Please enter a valid format.');
            setValidSuccess(false);
        }
        else {
            setEmailErr('');
            setValidSuccess(true);
        }
        return validSuccess;
    }

    const validateContact = (contact) => {
        if (contact.trim() == '') {
            setContactErr("*Contact No. cannot be empty");
            setValidSuccess(false);
        }
        else if (!/^[0-9]*$/.test(contact)) {
            setContactErr("*Only numbers are allowed.");
            setValidSuccess(false);
        }
        else {
            setContactErr('');
            setValidSuccess(true);
        }
        return validSuccess;
    }
    const clearInput = () => {
        setName('')
        setEmail('')
        setContact('')
        setNameErr('')
        setEmailErr('')
        setContactErr('')
    }
    const handleClick = (e) => {
        e.preventDefault();
        if (validateContact(contact) && validateEmail(email) && validateName(name)) {
            clearInput();
            alert("Congratulation! Sign up is successful.");
        }
        else {
            alert("Sign up failed. Please check all the fields carefully.")
        }
    }

    return (
        <div className="form-container">
            <form>
                <div className="row" style={{ marginBottom: 0 }}>
                    <div className="input-field col s3">
                        <div className="col s12">
                            Full Name:
                            <input type="text" placeholder="Enter your full name" id="name" onChange={valChange} />
                            <p>{nameErr}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s3">
                        <div className="col s12">
                            E-mail:
                            <input type="text" placeholder="Enter your e-mail" id="email" onChange={valChange} />
                            <p>{emailErr}</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field col s3">
                        <div className="col s12">
                            Contact Number:
                            <input type="text" placeholder="Enter your contact number." id="contact" onChange={valChange} />
                            <p>{contactErr}</p>
                        </div>
                    </div>
                </div>
                <button onClick={handleClick} className="btn waves-effect waves-light" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default FormValidation;