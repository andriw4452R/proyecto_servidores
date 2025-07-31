from flask import Blueprint, request, jsonify
from app.Database.Datasource import db
from app.Models.alertas import Alerta
from app.Models.tipoAlertas import TipoAlerta
from app.Models.usuario import Usuario
from datetime import datetime

alerta_bp = Blueprint('alerta_bp', __name__, url_prefix='/alertas')

@alerta_bp.route('', methods=['POST'])
def crear_alerta():
    data = request.get_json()

    titulo = data.get('titulo')
    descripcion = data.get('descripcion')
    ubicacion = data.get('ubicacion')
    tipo_alerta_id = data.get('tipo_alerta_id')
    nuevo_tipo = data.get('nuevo_tipo')  # Nuevo tipo en caso de "Otro"
    usuario_id = data.get('usuario_id')
    fecha = data.get('fecha')

    if not titulo or not descripcion or not ubicacion or not usuario_id:
        return jsonify({'error': 'Todos los campos son obligatorios'}), 400

    # ✅ Si el usuario escribió un nuevo tipo
    if nuevo_tipo:
        # Verificar si ya existe para no duplicar
        tipo_existente = TipoAlerta.query.filter_by(tipo=nuevo_tipo).first()
        if tipo_existente:
            tipo_alerta_id = tipo_existente.id
        else:
            tipo_nuevo = TipoAlerta(tipo=nuevo_tipo)
            db.session.add(tipo_nuevo)
            db.session.commit()
            tipo_alerta_id = tipo_nuevo.id

    # Validar que tipo_alerta_id ahora sí exista
    if not tipo_alerta_id:
        return jsonify({'error': 'Debe seleccionar un tipo válido'}), 400

    alerta = Alerta(
        titulo=titulo,
        descripcion=descripcion,
        ubicacion=ubicacion,
        tipo_alerta_id=tipo_alerta_id,
        usuario_id=usuario_id,
        fecha=datetime.strptime(fecha, '%Y-%m-%d').date()
    )

    db.session.add(alerta)
    db.session.commit()

    return jsonify({'message': 'Alerta creada exitosamente', 'id': alerta.id}), 201



# ✅ Listar todas las alertas
@alerta_bp.route('', methods=['GET'])
def listar_alertas():
    alertas = Alerta.query.all()
    resultado = []
    for alerta in alertas:
        resultado.append({
            'id': alerta.id,
            'titulo': alerta.titulo,
            'descripcion': alerta.descripcion,
            'ubicacion': alerta.ubicacion,
            'fecha': str(alerta.fecha),
            'tipo_alerta': alerta.tipo_alerta.tipo,
            'usuario': alerta.usuario.correo
        })
    return jsonify(resultado), 200


# ✅ Obtener alerta por ID
@alerta_bp.route('/<int:id>', methods=['GET'])
def obtener_alerta(id):
    alerta = Alerta.query.get(id)
    if not alerta:
        return jsonify({'error': 'Alerta no encontrada.'}), 404

    return jsonify({
        'id': alerta.id,
        'titulo': alerta.titulo,
        'descripcion': alerta.descripcion,
        'ubicacion': alerta.ubicacion,
        'fecha': str(alerta.fecha),
        'tipo_alerta': alerta.tipo_alerta.tipo,
        'usuario': alerta.usuario.correo
    })


# ✅ Actualizar alerta por ID
@alerta_bp.route('/<int:id>', methods=['PUT'])
def actualizar_alerta(id):
    alerta = Alerta.query.get(id)
    if not alerta:
        return jsonify({'error': 'Alerta no encontrada'}), 404

    data = request.get_json()

    alerta.titulo = data.get('titulo', alerta.titulo)
    alerta.descripcion = data.get('descripcion', alerta.descripcion)
    alerta.ubicacion = data.get('ubicacion', alerta.ubicacion)
    if data.get('fecha'):
        alerta.fecha = datetime.strptime(data['fecha'], '%Y-%m-%d').date()

    db.session.commit()
    return jsonify({'message': 'Alerta actualizada exitosamente'})


# ✅ Eliminar alerta por ID
@alerta_bp.route('/<int:id>', methods=['DELETE'])
def eliminar_alerta(id):
    alerta = Alerta.query.get(id)
    if not alerta:
        return jsonify({'error': 'Alerta no encontrada'}), 404

    db.session.delete(alerta)
    db.session.commit()
    return jsonify({'message': 'Alerta eliminada exitosamente'})
