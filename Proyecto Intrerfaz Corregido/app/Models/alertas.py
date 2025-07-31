from app.Database.Datasource import db
from datetime import date

class Alerta(db.Model):
    __tablename__ = 'alertas'

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    titulo = db.Column(db.String(150), nullable=False)
    descripcion = db.Column(db.Text, nullable=False)
    ubicacion = db.Column(db.String(255), nullable=False)
    fecha = db.Column(db.Date, default=date.today)

    # Relaciones
    tipo_alerta_id = db.Column(db.Integer, db.ForeignKey('tipo_alertas.id'), nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuarios.id'), nullable=False)

    tipo_alerta = db.relationship('TipoAlerta', backref='alertas')
    usuario = db.relationship('Usuario', backref='alertas')

    def __init__(self, titulo, descripcion, ubicacion, tipo_alerta_id, usuario_id, fecha=date.today()):
        self.titulo = titulo
        self.descripcion = descripcion
        self.ubicacion = ubicacion
        self.tipo_alerta_id = tipo_alerta_id
        self.usuario_id = usuario_id
        self.fecha = fecha

