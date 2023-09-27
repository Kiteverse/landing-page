import React from 'react';
import './ContactForm.css';

function ContactForm({ t, locale }) {
    return (
        <div className="contact-form-wrapper">
            {
                locale === 'AR'
                    ? <div 
                        dangerouslySetInnerHTML={{
                            __html: `
                            <iframe src="https://forms.monday.com/forms/embed/3e2491163e642b431c80104177533e13?r=euc1" 
                            width="100%" 
                            height="1000" 
                            style="border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);"></iframe>`
                        }}
                    />
                    : <div style={{ height: 'max-content', overflowY: 'hidden' }}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <iframe src="https://forms.monday.com/forms/embed/808b10793f677f13798adbefc2cfdbac?r=euc1" 
                                width="100%" 
                                height="1000" 
                                style=" border: 0; border-radius: 5px; box-shadow:  5px 5px 56px 0px  rgba(0,0,0,0.25);">
                            </iframe>`
                        }}
                    />
            }

        </div>
    );
}

export default ContactForm;
