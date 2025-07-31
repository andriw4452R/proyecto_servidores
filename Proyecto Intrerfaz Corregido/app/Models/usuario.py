from app.Database.Datasource import db

class Usuario(db.Model):
    __tablename__ = 'usuarios'  # Nombre de la tabla en la base de datos

    id = db.Column(db.Integer, primary_key=True,autoincrement= True)
    numero = db.Column(db.String(20), nullable=False)  # Teléfono
    correo = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(128), nullable=False)  # Debe estar hasheada en producción
    role = db.Column(db.String(20), nullable=False, default='user') # Rol del usuario, por defecto 'user'

    def __init__(self, numero, correo, password, role='user'):
        self.numero = numero
        self.correo = correo
        self.password = password
        self.role = role
