from flask import Blueprint, render_template

inicio_bp = Blueprint('inicio_bp', __name__)


@inicio_bp.route('/')
def menu_inicio():
    return render_template('page1.html')

@inicio_bp.route('/ver_Alertas')
def ver_alertas():
    return render_template('verAlertas.html')


@inicio_bp.route('/postAlerta')
def post_alerta():
    return render_template('alertas.html')

@inicio_bp.route('/buscar')
def buscar():
    return render_template('busqueda.html')


@inicio_bp.route('/registrarDatosG')
def registrar_datos_geologicos():
    return render_template('registrarDatos.html')