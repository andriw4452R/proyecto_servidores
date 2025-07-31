from flask import Flask
from flask import session
from app.Database.Datasource import db
from app.Database.config import Config
from app.Routes.inicio import inicio_bp
from app.Routes.admin import admin_bp
from app.Routes.login import  register_bp
from app.Controllers.usuario import usuario_bp
from app.Controllers.tipoAlerta import tipo_alerta_bp
from app.Controllers.alertas import alerta_bp
from app.Routes.usuario import usuarioAct_bp

def create_app():
    app = Flask(__name__)
    app.secret_key = 'ñ2004kaldhgcjkzkxoiqw1'  # Cambia por algo seguro
    app.config.from_object(Config)
    db.init_app(app)

    app.register_blueprint(inicio_bp)
    app.register_blueprint(admin_bp)
    app.register_blueprint(register_bp)
    app.register_blueprint(usuario_bp)

    app.register_blueprint(tipo_alerta_bp)
    app.register_blueprint(alerta_bp)

    app.register_blueprint(usuarioAct_bp)
    return app