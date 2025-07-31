from flask import Blueprint, render_template,redirect, url_for, request, jsonify
from flask import session
usuarioAct_bp = Blueprint('usuarioAct_bp', __name__)


@usuarioAct_bp.route('/actualizar')
def actualizar_usuario():
    if 'usuario_id' not in  session:
        return redirect('/login')
    return render_template('put.html', usuario_id=session['usuario_id'])