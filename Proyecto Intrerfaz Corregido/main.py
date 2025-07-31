from app import create_app
from app.Database.Datasource import db
from app.Models.usuario import Usuario
from app.Models.tipoAlertas import TipoAlerta


app = create_app()

with app.app_context():
    db.create_all()
    print("base de datos iniciada y tablas creadas")

    #DESCOMENTAR ESTA LINEA  PARA QUE SE INGRESE UN ADMINISTRADOR POR DEFECTO Y COMENTARLA DESPUES DE EJECUTAR LA PRIMERA EJECUCION
    # ✅ Crear el admin si no existe
    #admin = Usuario.query.filter_by(correo='admin@geoData.com').first()
    #if not admin:
    #    nuevo_admin = Usuario(
    #        numero='000000000',           # Teléfono ficticio
    #        correo='admin@geoData.com',
    #        password='admin',            # ⚠ En producción, encripta con werkzeug.security
    #        role='admin'
    #    )
    #    db.session.add(nuevo_admin)
    #    db.session.commit()
    #    print("✅ Administrador creado: admin@geoData.com / admin")
    #else:
    #    print("ℹ️ El administrador ya existe")


    # DESCOMENTAR  ESTA LINEA PARA QUE SE INGRESEN LOS TIPOS DE ALERTA POR DEFECTO Y COMENTARLA DESPUES DE EJECUTAR LA PRIMERA EJECUCION
    
    # ✅ Lista de tipos de alerta predeterminados
    tipos_predeterminados = ["Sismo", "Erupción Volcánica", "Inundación", "Deslizamiento"]

    for tipo in tipos_predeterminados:
        # Verificar si ya existe
        if not TipoAlerta.query.filter_by(tipo=tipo).first():
            nuevo_tipo = TipoAlerta(tipo=tipo)
            db.session.add(nuevo_tipo)
            print(f"✅ Tipo de alerta agregado: {tipo}")
        else:
            print(f"ℹ️ Tipo de alerta ya existe: {tipo}")

    db.session.commit()
    print("✅ Todos los tipos de alerta se han agregado o estaban registrados.")


if __name__ =='__main__':
    app.run(debug=True)