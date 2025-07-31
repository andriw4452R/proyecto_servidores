from flask import Blueprint, render_template

admin_bp = Blueprint('admin_bp',__name__)


@admin_bp.route('/administrador')
def panel_administrador():
    return render_template('page2.html')

@admin_bp.route('/inicio_Admin')
def inicio_admin():
    return render_template('inicioAdmin.html')
