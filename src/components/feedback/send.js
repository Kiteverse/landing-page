export const sendEmailFeedback = async (email) => {
    try {
        const endpoint = `${process.env.REACT_APP_BACKEND_URL}/api/v1/r1/feedback/email`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email })
        };


        const response = await fetch(endpoint, requestOptions);

        if (!response.ok) {
            throw new Error(`Server responded with error status: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Error sending email feedback.`, error);
        throw error;
    }
}

export const sendVerseFeedback = async (verse) => {
    try {
        const endpoint = `${process.env.REACT_APP_BACKEND_URL}/api/v1/r1/feedback/verse`;
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ verse: verse })
        };


        const response = await fetch(endpoint, requestOptions);

        if (!response.ok) {
            throw new Error(`Server responded with error status: ${response.status}`);
        }

        const responseJson = await response.json();
        return responseJson;
    } catch (error) {
        console.error(`Error sending verse feedback.`, error);
        throw error;
    }
}