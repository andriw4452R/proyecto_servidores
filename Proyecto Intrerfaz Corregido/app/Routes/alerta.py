from flask import Blueprint, render_template


alerta_bp = Blueprint('alerta_bp', __name__, url_prefix='/alertas')

@alerta_bp.route('/ver-alertas')
def ver_alertas():
    return render_template('verAlertas.html')
