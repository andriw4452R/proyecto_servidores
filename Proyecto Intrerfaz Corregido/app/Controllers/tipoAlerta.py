from flask import Blueprint, request, jsonify
from app.Database.Datasource import db
from app.Models.tipoAlertas import TipoAlerta

tipo_alerta_bp = Blueprint('tipo_alerta_bp', __name__, url_prefix='/tipo_alertas')

# ✅ Crear un tipo de alerta
@tipo_alerta_bp.route('', methods=['POST'])
def crear_tipo_alerta():
    data = request.get_json()
    tipo = data.get('tipo')

    if not tipo:
        return jsonify({'error': 'El campo tipo es obligatorio'}), 400

    # Verificar si ya existe
    if TipoAlerta.query.filter_by(tipo=tipo).first():
        return jsonify({'error': 'El tipo de alerta ya existe'}), 409

    nuevo_tipo = TipoAlerta(tipo=tipo)
    db.session.add(nuevo_tipo)
    db.session.commit()

    return jsonify({'message': 'Tipo de alerta creado', 'id': nuevo_tipo.id}), 201


# ✅ Listar todos los tipos de alerta
@tipo_alerta_bp.route('', methods=['GET'])
def listar_tipos_alerta():
    tipos = TipoAlerta.query.all()
    resultado = [{'id': t.id, 'tipo': t.tipo} for t in tipos]
    return jsonify(resultado), 200


# ✅ Eliminar tipo de alerta por ID
@tipo_alerta_bp.route('/<int:id>', methods=['DELETE'])
def eliminar_tipo_alerta(id):
    tipo = TipoAlerta.query.get(id)
    if not tipo:
        return jsonify({'error': 'Tipo de alerta no encontrado'}), 404

    db.session.delete(tipo)
    db.session.commit()
    return jsonify({'message': 'Tipo de alerta eliminado'})
