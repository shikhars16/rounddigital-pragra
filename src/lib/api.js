export const sendContactForm = async (data) => {
   const res = await fetch(`/api/contact`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify(data),
    })

    return res;
}