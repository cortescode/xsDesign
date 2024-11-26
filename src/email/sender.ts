
import sgMail from '@sendgrid/mail'
import { SENDGRID_API_KEY } from '$env/static/private'


const apiKey = SENDGRID_API_KEY

console.log("Api key:", apiKey)
sgMail.setApiKey(apiKey)


const from = 'subscriptions@xsdesign.co'

export async function sendEmail(to: string, subject: string, html: string) {

    const msg: sgMail.MailDataRequired = {
        to: to,
        from: from,
        subject: subject,
        html: html,
    }

    console.log("Sending email to:", to)

    try {
        sgMail.send(msg)
            .then(() => {
                console.log('Email sent')
            })
            .catch((error: Error) => {
                console.error(error)
            })

        return true
    } catch(error: any) {
        return false
    }
}