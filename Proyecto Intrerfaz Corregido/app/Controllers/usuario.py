from flask import Blueprint, request, jsonify
from app.Models.usuario import Usuario
from app.Database.Datasource import db
from flask import session

usuario_bp = Blueprint('usuario_bp', __name__, url_prefix='/usuarios')

# 👉 POST: Crear nuevo usuario
@usuario_bp.route('', methods=['POST'])
def crear_usuario():
    data = request.get_json()

    numero = data.get('numero', '').strip()
    correo = data.get('correo', '').strip()
    password = data.get('password', '').strip()

    if not numero or not correo or not password:
        return jsonify({'error': 'Todos los campos son obligatorios'}), 400


    nuevo_usuario = Usuario(
        numero=data['numero'],
        correo=data['correo'],
        password=data['password']
    )

    db.session.add(nuevo_usuario)
    db.session.commit()

    return jsonify({'message': 'Usuario creado exitosamente'}), 201

# 👉 GET: Obtener usuario por ID
@usuario_bp.route('/<int:id>', methods=['GET'])
def obtener_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({'error': 'Usuario no encontrado.'}), 404

    return jsonify({
        'id': usuario.id,
        'numero': usuario.numero,
        'correo': usuario.correo
    })

# 👉 PUT: Actualizar usuario por ID
@usuario_bp.route('/<int:id>', methods=['PUT'])
def actualizar_usuario(id):
    data = request.get_json()
    usuario = Usuario.query.get(id)

    if not usuario:
        return jsonify({'error': 'Usuario no encontrado.'}), 404

    usuario.numero = data.get('numero', usuario.numero)
    usuario.correo = data.get('correo', usuario.correo)
    usuario.password = data.get('password', usuario.password)

    db.session.commit()
    return jsonify({'message': 'Usuario actualizado exitosamente'})

# 👉 DELETE: Eliminar usuario por ID
@usuario_bp.route('/<int:id>', methods=['DELETE'])
def eliminar_usuario(id):
    usuario = Usuario.query.get(id)
    if not usuario:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    db.session.delete(usuario)
    db.session.commit()
    return jsonify({'message': 'Usuario eliminado exitosamente'})


#LOGIN: Verificar usuario

@usuario_bp.route('/login', methods=['POST'])
def login_usuario():
    data = request.get_json()

    correo = data.get('correo', '').strip()
    password = data.get('password', '').strip()

    # Validar campos vacíos
    if not correo or not password:
        return jsonify({'error': 'Correo y contraseña son obligatorios'}), 400

    # Buscar usuario por correo
    usuario = Usuario.query.filter_by(correo=correo).first()

    if not usuario:
        return jsonify({'error': 'Usuario no encontrado'}), 404

    # Validar contraseña (en producción debe estar encriptada)
    if usuario.password != password:
        return jsonify({'error': 'Contraseña incorrecta'}), 401
    
    session['usuario_id'] = usuario.id  # Guardar ID de usuario en sesión

    return jsonify({
        'message': 'Inicio de sesión exitoso',
        'usuario': {
            'id': usuario.id,
            'numero': usuario.numero,
            'correo': usuario.correo,
            'role': usuario.role
        }
    }), 200
