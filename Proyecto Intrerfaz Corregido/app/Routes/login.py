from flask import Blueprint, render_template

register_bp = Blueprint('register_bp',__name__)


@register_bp.route('/register')
def register_user():
    return render_template('page4.html')

@register_bp.route('/login')
def login():
    return render_template('page5.html')


@register_bp.route('/sesion')
def iniciar():
    return render_template('page6.html')
