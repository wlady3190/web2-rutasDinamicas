import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

def enviar_correo(destinatario, asunto, cuerpo):
    # Configura la información del remitente y destinatario
    remitente = 'wlady3190@gmail.com'
    clave = 'kyxm pkan lzxa mjji'
    
    # Configura el servidor SMTP
    servidor_smtp = 'smtp.gmail.com'
    puerto_smtp = 465
    
    # Crea el objeto de mensaje
    mensaje = MIMEMultipart()
    mensaje['From'] = remitente
    mensaje['To'] = destinatario
    mensaje['Subject'] = asunto

    # Agrega el cuerpo del mensaje
    mensaje.attach(MIMEText(cuerpo, 'plain'))

    # Establece la conexión con el servidor SMTP
    servidor = smtplib.SMTP(servidor_smtp, puerto_smtp)
    servidor.starttls()

    # Inicia sesión en el servidor
    servidor.login(remitente, clave)

    # Envía el mensaje
    servidor.sendmail(remitente, destinatario, mensaje.as_string())

    # Cierra la conexión
    servidor.quit()

if __name__ == "__main__":
    # Ejemplo de uso
    destinatario = 'wlady3190@yopmail.com'
    asunto = 'Error en la ejecución del programa'
    cuerpo = 'El programa se ejecutó de manera correcta'

    enviar_correo(destinatario, asunto, cuerpo)
