from app.Database.Datasource import db

class TipoAlerta(db.Model):
    __tablename__ = 'tipo_alertas'  # Nombre de la tabla en la base de datos

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    tipo= db.Column(db.String(100), nullable=False, unique=True)  # Tipo de alerta

    def __init__(self, tipo):
        self.tipo = tipo