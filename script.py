import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_correo(destinatario, asunto, cuerpo):
    # Configuración del servidor SMTP
    servidor_smtp = 'smtp.gmail.com'
    puerto_smtp = 465  # Cambia esto según tu configuración
    usuario_smtp = 'wlady3190@gmail.com'
    contraseña_smtp = 'kyxm pkan lzxa mjji'

    # Crear el objeto del mensaje
    mensaje = MIMEMultipart()
    mensaje['From'] = usuario_smtp
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto

    # Agregar el cuerpo del mensaje
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    # Iniciar la conexión SMTP
    with smtplib.SMTP(servidor_smtp, puerto_smtp) as servidor:
        # Iniciar sesión en el servidor SMTP
        servidor.starttls()
        servidor.login(usuario_smtp, contraseña_smtp)

        # Enviar el correo electrónico
        servidor.sendmail(usuario_smtp, destinatario, mensaje.as_string())

    print('Correo enviado exitosamente a', destinatario)

# Ejemplo de uso
destinatario = 'wlady3190@yopmail.com'
asunto = 'Asunto del correo'
cuerpo = 'Cuerpo del correo'

enviar_correo(destinatario, asunto, cuerpo)
