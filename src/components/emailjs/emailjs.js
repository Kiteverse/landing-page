import emailjs from 'emailjs-com';

function EmailjsInit() {
    try {
        emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY)
    } catch (error) {
        console.error(`Error initializing emailjs`);
    }

}

EmailjsInit();


export async function send(form) {
    try {
        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID,
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
            form,
            'x3XltKuCli2pSsoOA'
        );

    } catch (error) {
        console.error(`Error sending form via EmailJs...`, error);
    }

}

export default EmailjsInit;