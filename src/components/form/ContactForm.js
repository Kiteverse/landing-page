import React, { useEffect, useRef, useState } from 'react';
import './ContactForm.css';
import { Button, Form, FormGroup } from 'react-bootstrap';

import emailLogo from '../../assets/images/email.svg';

import emailjs from 'emailjs-com';
import { send } from '../emailjs/emailjs';
import { Popup } from '../popup/popup';


function ContactForm({ genericPopupControl }) {
    const setShowPopup = genericPopupControl;
    const [startTime, setStartTime] = useState(null);
    const [showMessage, setShowMessage] = useState(false);


    const form = useRef();

    const [email, setEmail] = useState('');


    useEffect(() => {
        setStartTime(new Date().getTime());
        console.log(`shoudl set start time: `, new Date().getTime());
        console.log(`set start time: `, startTime);

    }, []);



    const onChangeEmail = (event) => {
        setEmail(event.target.value);
    }


    const onSubmitForm = async (e) => {
        e.preventDefault();

        if (email.length < 1) {
            return
        }

        setShowPopup(false);

        // Track time taken to fill form
        const endTime = new Date().getTime();

        if (!startTime) {
            console.log(`Start time null::::`, startTime)
        }

        console.log(`start tiem: `, startTime)

        console.log(`end time; `, endTime)
        const timeTaken = (endTime - startTime) / 1000;

        // Prevent bots
        if (timeTaken < 1) {
            console.warn('Suspicious activity detected.');
            return;
        }

        if (!email) return;


        await send(form.current);

        setShowMessage(true);

        setEmail('');
    }



    return (
        <>
            {
                showMessage &&
                <Popup
                    visibilityControl={[showMessage, setShowMessage]}
                    textSelector={'contact_message'}
                />
            }
            <Form className='form-row' ref={form} onSubmit={(e) => onSubmitForm(e)}>
                <FormGroup controlId='contactForm.ControlEmail'>
                    <Form.Control
                        className='contact-form-control'
                        onChange={onChangeEmail}
                        type='email'
                        value={email}
                        placeholder={'PLAY@KITEVERSE.APP'}
                        name='user_email'
                    ></Form.Control>
                </FormGroup>

                <input type="image" src={emailLogo} alt="Submit" />
            </Form>
        </>

    );
}

export default ContactForm;