'use client';
    
export async function handleSubmit(){
    
    const name = document.getElementById("form_name") as HTMLInputElement;
    const email = document.getElementById("form_email") as HTMLInputElement;
    const message = document.getElementById("form_message") as HTMLTextAreaElement;

    const webhookURL = process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL;

    if (!webhookURL) {
        console.log("webhook", webhookURL)
        alert("An error occurred while submitting your message.")
        return
    }

    try {
        await fetch(webhookURL, {
            method: "POST",
            headers: { 
                    },
            body: JSON.stringify({
                text: `📩 *New Contact Form Submission*\n👤 *Name:* ${name.value}\n✉️ *Email:* ${email.value}\n📝 *Message:* ${message.value}`,
            }),
        });
        alert('Message sent successfully!');

    }
    catch (error) {
        console.error('Error submitting form:', error);
        alert('An error occurred while submitting your message.');
    }
};
    
    