import React, { useEffect, useRef, useState } from 'react';
import './FormVerse.css';
import { Button, Form, FormGroup } from 'react-bootstrap';

import emailLogo from '../../assets/images/email.svg';
import { Popup } from '../popup/popup';
import { sendVerseFeedback } from '../feedback/send';


function FormVerse({ genericPopupControl, submitControl }) {
    const setShowPopup = genericPopupControl;
    const [startTime, setStartTime] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const [submitTrigger, setSubmitTrigger] = submitControl;

    const form = useRef();

    const [verse, setVerse] = useState('');


    useEffect(() => {
        setStartTime(new Date().getTime());

    }, []);

    useEffect(() => {
        async function submit() {
            if (submitTrigger) {
                await onSubmitForm();
            }
        }
        submit();

    }, [submitTrigger]);


    const onChangeVerse = (event) => {
        setVerse(event.target.value);
    }


    const onSubmitForm = async (e) => {
        if (e) e.preventDefault();

        if (verse.length < 1) {
            return
        }

        setShowPopup(false);

        // Track time taken to fill form
        const endTime = new Date().getTime();


        const timeTaken = (endTime - startTime) / 1000;

        // Prevent bots
        if (timeTaken < 1) {
            console.warn('Suspicious activity detected.');
            return;
        }

        if (!verse) return;

        sendVerseFeedback(verse);
        setShowMessage(true);
        setSubmitTrigger(false);

        console.log(`uploaded`)
        setVerse('');
    }



    return (

        <>
            {
                showMessage &&
                <Popup
                    visibilityControl={[showMessage, setShowMessage]}
                    textSelector={'verse_message'}
                />
            }

            <Form className='form-verse-col' ref={form} onSubmit={(e) => onSubmitForm(e)}>
                <FormGroup controlId='verseForm.ControlVerse'>
                    <Form.Control
                        className='verse-form-control'
                        onChange={onChangeVerse}
                        type='verse'
                        value={verse}
                        name='user_verse'
                    ></Form.Control>
                </FormGroup>
            </Form>

        </>




    );
}

export default FormVerse;