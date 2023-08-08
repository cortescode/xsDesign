
import os
from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail

from dotenv import load_dotenv

load_dotenv()

def send_contact_message(name, email, message, additional_data, destination = 'cortesrodriguezpablo3@gmail.com') -> bool:

    html_content = generate_html_content(name, email, message, additional_data)
    
    message = Mail(
        from_email='pablo@xsdesign.co',
        to_emails=destination,
        subject="Mensaje desde el formulario de contacto",
        html_content = html_content
    )
    try:
        sg = SendGridAPIClient(os.environ.get('SENDGRID_API_KEY'))
        response = sg.send(message)
    except Exception as e:
        print(e)

    return response.status_code == 202



def generate_html_content(name:str, email:str, message:str, additional_data:dict) -> str:

    html_content:str = f'''
    <html>
        <body>
            <h1>Mensaje de {name}</h1>
            <p>Correo: {email}</p>
            <p>Message: {message}</p>
            <p>Additional data: {additional_data}</p>
        </body>
    </html>
    '''
    return html_content