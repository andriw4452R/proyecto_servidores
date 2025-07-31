const zonasEcuador =[
    {
      "id": 1,
      "Region": "Región Andina",
      "Zonas": [
        {
          "id": 1,
          "nombre": "Quito",
          "descripcion": "Capital del país, ubicada en zona volcánica",
          "ubicacion": "Quito, Pichincha",
          "peligros": ["Erupciones volcánicas", "Sismos", "Heladas"],
          "coordenadas": { "lat": "-0.2295", "lng": "-78.5249" }
        },
        {
          "id": 2,
          "nombre": "Latacunga",
          "descripcion": "Ciudad cercana al volcán Cotopaxi",
          "ubicacion": "Latacunga, Cotopaxi",
          "peligros": ["Lahares", "Deslizamientos", "Sismos"],
          "coordenadas": { "lat": "-0.9352", "lng": "-78.6153" }
        },
        {
          "id": 3,
          "nombre": "Riobamba",
          "descripcion": "Zona interandina rodeada de volcanes",
          "ubicacion": "Riobamba, Chimborazo",
          "peligros": ["Nevadas", "Deslizamientos", "Sismos"],
          "coordenadas": { "lat": "-1.6743", "lng": "-78.6474" }
        },
        {
          "id": 4,
          "nombre": "Ambato",
          "descripcion": "Ciudad agrícola y comercial en Tungurahua",
          "ubicacion": "Ambato, Tungurahua",
          "peligros": ["Actividad volcánica", "Heladas", "Sismos"],
          "coordenadas": { "lat": "-1.2543", "lng": "-78.6229" }
        },
        {
          "id": 5,
          "nombre": "Cuenca",
          "descripcion": "Ciudad patrimonial atravesada por ríos",
          "ubicacion": "Cuenca, Azuay",
          "peligros": ["Inundaciones", "Deslizamientos", "Sismos"],
          "coordenadas": { "lat": "-2.9006", "lng": "-79.0045" }
        },
        {
          "id": 6,
          "nombre": "Loja",
          "descripcion": "Ciudad cultural en la zona sur andina",
          "ubicacion": "Loja, Loja",
          "peligros": ["Heladas", "Sequías", "Deslizamientos"],
          "coordenadas": { "lat": "-3.9931", "lng": "-79.2042" }
        },
        {
          "id": 7,
          "nombre": "Ibarra",
          "descripcion": "Ciudad rodeada de lagunas y volcanes",
          "ubicacion": "Ibarra, Imbabura",
          "peligros": ["Heladas", "Sismos", "Inundaciones"],
          "coordenadas": { "lat": "0.3517", "lng": "-78.1223" }
        },
        {
          "id": 8,
          "nombre": "Otavalo",
          "descripcion": "Zona turística con mercados artesanales",
          "ubicacion": "Otavalo, Imbabura",
          "peligros": ["Heladas", "Deslizamientos", "Sequías"],
          "coordenadas": { "lat": "0.2333", "lng": "-78.2667" }
        },
        {
          "id": 9,
          "nombre": "Tulcán",
          "descripcion": "Ciudad fronteriza con Colombia",
          "ubicacion": "Tulcán, Carchi",
          "peligros": ["Heladas", "Sismos", "Deslizamientos"],
          "coordenadas": { "lat": "0.8111", "lng": "-77.7181" }
        },
        {
          "id": 10,
          "nombre": "Alausí",
          "descripcion": "Zona montañosa con pendientes pronunciadas",
          "ubicacion": "Alausí, Chimborazo",
          "peligros": ["Deslizamientos", "Sismos", "Heladas"],
          "coordenadas": { "lat": "-2.1974", "lng": "-78.8493" }
        },
        {
          "id": 11,
          "nombre": "Guaranda",
          "descripcion": "Región montañosa con climas fríos",
          "ubicacion": "Guaranda, Bolívar",
          "peligros": ["Heladas", "Lluvias intensas", "Deslizamientos"],
          "coordenadas": { "lat": "-1.5931", "lng": "-79.0039" }
        },
        {
          "id": 12,
          "nombre": "Macas",
          "descripcion": "Zona de transición entre sierra y amazonía",
          "ubicacion": "Macas, Morona Santiago",
          "peligros": ["Inundaciones", "Desbordamiento de ríos", "Deslizamientos"],
          "coordenadas": { "lat": "-2.3087", "lng": "-78.1118" }
        },
        {
          "id": 13,
          "nombre": "Cayambe",
          "descripcion": "Región cercana al nevado Cayambe",
          "ubicacion": "Cayambe, Pichincha",
          "peligros": ["Avalanchas", "Heladas", "Erupciones"],
          "coordenadas": { "lat": "0.0500", "lng": "-78.1333" }
        },
        {
          "id": 14,
          "nombre": "Saquisilí",
          "descripcion": "Zona agrícola con mercados semanales",
          "ubicacion": "Saquisilí, Cotopaxi",
          "peligros": ["Heladas", "Sequías", "Sismos"],
          "coordenadas": { "lat": "-0.8456", "lng": "-78.6686" }
        },
        {
          "id": 15,
          "nombre": "Baños de Agua Santa",
          "descripcion": "Ciudad turística cerca del volcán Tungurahua",
          "ubicacion": "Baños, Tungurahua",
          "peligros": ["Actividad volcánica", "Desbordamiento de ríos", "Sismos"],
          "coordenadas": { "lat": "-1.3962", "lng": "-78.4214" }
        },
        {
          "id": 16,
          "nombre": "Loja Sur",
          "descripcion": "Área agrícola con montañas",
          "ubicacion": "Loja, Loja",
          "peligros": ["Heladas", "Sequías", "Deslizamientos"],
          "coordenadas": { "lat": "-4.0039", "lng": "-79.2051" }
        },
        {
          "id": 17,
          "nombre": "Saraguro",
          "descripcion": "Zona de cultura indígena con montañas",
          "ubicacion": "Saraguro, Loja",
          "peligros": ["Heladas", "Sequías", "Deslizamientos"],
          "coordenadas": { "lat": "-3.6194", "lng": "-79.2411" }
        },
        {
          "id": 18,
          "nombre": "Píllaro",
          "descripcion": "Región agrícola en Tungurahua",
          "ubicacion": "Píllaro, Tungurahua",
          "peligros": ["Sismos", "Heladas", "Deslizamientos"],
          "coordenadas": { "lat": "-1.1786", "lng": "-78.5411" }
        },
        {
          "id": 19,
          "nombre": "Chunchi",
          "descripcion": "Zona montañosa con quebradas",
          "ubicacion": "Chunchi, Chimborazo",
          "peligros": ["Deslizamientos", "Sismos", "Heladas"],
          "coordenadas": { "lat": "-2.3263", "lng": "-78.8642" }
        },
        {
          "id": 20,
          "nombre": "Pelileo",
          "descripcion": "Ciudad textil en la sierra central",
          "ubicacion": "Pelileo, Tungurahua",
          "peligros": ["Heladas", "Actividad volcánica", "Sismos"],
          "coordenadas": { "lat": "-1.3167", "lng": "-78.5500" }
        }
      ]
    },
    {
      "id": 2,
      "Region": "Región Costa",
      "Zonas": [
        {
          "id": 1,
          "nombre": "Esmeraldas",
          "descripcion": "Ciudad portuaria y turística en el norte",
          "ubicacion": "Esmeraldas, Esmeraldas",
          "peligros": ["Erosión costera", "Inundaciones", "Contaminación marina"],
          "coordenadas": { "lat": "0.9682", "lng": "-79.6517" }
        },
        {
          "id": 2,
          "nombre": "San Lorenzo",
          "descripcion": "Puerto estratégico en la frontera norte",
          "ubicacion": "San Lorenzo, Esmeraldas",
          "peligros": ["Oleajes fuertes", "Tsunamis", "Huracanes"],
          "coordenadas": { "lat": "1.2881", "lng": "-78.8357" }
        },
        {
          "id": 3,
          "nombre": "Atacames",
          "descripcion": "Zona turística con playas",
          "ubicacion": "Atacames, Esmeraldas",
          "peligros": ["Mareas altas", "Erosión costera", "Contaminación marina"],
          "coordenadas": { "lat": "0.8624", "lng": "-79.8341" }
        },
        {
          "id": 4,
          "nombre": "Muisne",
          "descripcion": "Isla costera con ecosistemas de manglar",
          "ubicacion": "Muisne, Esmeraldas",
          "peligros": ["Tsunamis", "Erosión costera", "Inundaciones"],
          "coordenadas": { "lat": "0.6106", "lng": "-80.0211" }
        },
        {
          "id": 5,
          "nombre": "Manta",
          "descripcion": "Ciudad portuaria y pesquera",
          "ubicacion": "Manta, Manabí",
          "peligros": ["Oleajes fuertes", "Tsunamis", "Contaminación marina"],
          "coordenadas": { "lat": "-0.9677", "lng": "-80.7089" }
        },
        {
          "id": 6,
          "nombre": "Bahía de Caráquez",
          "descripcion": "Zona turística con ecosistema costero",
          "ubicacion": "Bahía de Caráquez, Manabí",
          "peligros": ["Erosión costera", "Inundaciones", "Sismos"],
          "coordenadas": { "lat": "-0.5993", "lng": "-80.4237" }
        },
        {
          "id": 7,
          "nombre": "Puerto López",
          "descripcion": "Área turística y biodiversa",
          "ubicacion": "Puerto López, Manabí",
          "peligros": ["Oleajes fuertes", "Huracanes", "Contaminación marina"],
          "coordenadas": { "lat": "-1.5622", "lng": "-80.8171" }
        },
        {
          "id": 8,
          "nombre": "Jipijapa",
          "descripcion": "Zona agrícola y costera",
          "ubicacion": "Jipijapa, Manabí",
          "peligros": ["Inundaciones", "Sequías", "Tsunamis"],
          "coordenadas": { "lat": "-1.3480", "lng": "-80.5783" }
        },
        {
          "id": 9,
          "nombre": "Salinas",
          "descripcion": "Balneario turístico más importante del país",
          "ubicacion": "Salinas, Santa Elena",
          "peligros": ["Tsunamis", "Mareas altas", "Contaminación marina"],
          "coordenadas": { "lat": "-2.2146", "lng": "-80.9631" }
        },
        {
          "id": 10,
          "nombre": "La Libertad",
          "descripcion": "Zona urbana e industrial en la costa",
          "ubicacion": "La Libertad, Santa Elena",
          "peligros": ["Contaminación industrial", "Tsunamis", "Oleajes fuertes"],
          "coordenadas": { "lat": "-2.2330", "lng": "-80.9005" }
        },
        {
          "id": 11,
          "nombre": "Playas",
          "descripcion": "Zona costera turística",
          "ubicacion": "Playas, Guayas",
          "peligros": ["Oleajes fuertes", "Huracanes", "Contaminación marina"],
          "coordenadas": { "lat": "-2.6300", "lng": "-80.3847" }
        },
        {
          "id": 12,
          "nombre": "Machala",
          "descripcion": "Ciudad agrícola y portuaria",
          "ubicacion": "Machala, El Oro",
          "peligros": ["Inundaciones", "Erosión costera", "Contaminación del agua"],
          "coordenadas": { "lat": "-3.2581", "lng": "-79.9554" }
        },
        {
          "id": 13,
          "nombre": "Puerto Bolívar",
          "descripcion": "Puerto marítimo principal de El Oro",
          "ubicacion": "Puerto Bolívar, El Oro",
          "peligros": ["Oleajes fuertes", "Tsunamis", "Contaminación marina"],
          "coordenadas": { "lat": "-3.2675", "lng": "-79.9891" }
        },
        {
          "id": 14,
          "nombre": "Balao",
          "descripcion": "Zona costera con actividad camaronera",
          "ubicacion": "Balao, Guayas",
          "peligros": ["Contaminación del agua", "Huracanes", "Inundaciones"],
          "coordenadas": { "lat": "-2.9000", "lng": "-79.7333" }
        },
        {
          "id": 15,
          "nombre": "Posorja",
          "descripcion": "Área pesquera y portuaria",
          "ubicacion": "Posorja, Guayas",
          "peligros": ["Oleajes fuertes", "Tsunamis", "Contaminación marina"],
          "coordenadas": { "lat": "-2.6167", "lng": "-80.3833" }
        },
        {
          "id": 16,
          "nombre": "Anconcito",
          "descripcion": "Puerto pesquero artesanal",
          "ubicacion": "Anconcito, Santa Elena",
          "peligros": ["Tsunamis", "Oleajes fuertes", "Contaminación marina"],
          "coordenadas": { "lat": "-2.3667", "lng": "-80.7667" }
        },
        {
          "id": 17,
          "nombre": "General Villamil",
          "descripcion": "Balneario turístico popular",
          "ubicacion": "Playas, Guayas",
          "peligros": ["Mareas altas", "Tsunamis", "Oleajes fuertes"],
          "coordenadas": { "lat": "-2.6500", "lng": "-80.3833" }
        },
        {
          "id": 18,
          "nombre": "Crucita",
          "descripcion": "Zona turística en Manabí",
          "ubicacion": "Crucita, Manabí",
          "peligros": ["Erosión costera", "Tsunamis", "Inundaciones"],
          "coordenadas": { "lat": "-0.8500", "lng": "-80.4333" }
        },
        {
          "id": 19,
          "nombre": "Puerto Cayo",
          "descripcion": "Zona costera con playas tranquilas",
          "ubicacion": "Puerto Cayo, Manabí",
          "peligros": ["Huracanes", "Mareas altas", "Contaminación marina"],
          "coordenadas": { "lat": "-0.8000", "lng": "-80.4500" }
        },
        {
          "id": 20,
          "nombre": "Pedernales",
          "descripcion": "Ciudad costera en el norte de Manabí",
          "ubicacion": "Pedernales, Manabí",
          "peligros": ["Tsunamis", "Erosión costera", "Sismos"],
          "coordenadas": { "lat": "0.0667", "lng": "-80.0667" }
        }
      ]
    },
    {
      "id": 3,
      "Region": "Región Amazónica",
      "Zonas": [
        {
          "id": 1,
          "nombre": "Tena",
          "descripcion": "Ciudad turística con ríos y cascadas",
          "ubicacion": "Tena, Napo",
          "peligros": ["Inundaciones", "Deslizamientos", "Erosión fluvial"],
          "coordenadas": { "lat": "-0.9878", "lng": "-77.8125" }
        },
        {
          "id": 2,
          "nombre": "Puyo",
          "descripcion": "Capital de Pastaza en la Amazonía central",
          "ubicacion": "Puyo, Pastaza",
          "peligros": ["Inundaciones", "Lluvias intensas", "Desbordamiento de ríos"],
          "coordenadas": { "lat": "-1.4833", "lng": "-77.9936" }
        },
        {
          "id": 3,
          "nombre": "Macas",
          "descripcion": "Ciudad amazónica en Morona Santiago",
          "ubicacion": "Macas, Morona Santiago",
          "peligros": ["Deslizamientos", "Inundaciones", "Erosión fluvial"],
          "coordenadas": { "lat": "-2.3087", "lng": "-78.1118" }
        },
        {
          "id": 4,
          "nombre": "Coca",
          "descripcion": "Puerto amazónico cercano a reservas petroleras",
          "ubicacion": "Francisco de Orellana, Orellana",
          "peligros": ["Contaminación de ríos", "Inundaciones", "Desbordamiento"],
          "coordenadas": { "lat": "-0.4629", "lng": "-76.9854" }
        },
        {
          "id": 5,
          "nombre": "Nueva Loja",
          "descripcion": "Centro petrolero en la Amazonía norte",
          "ubicacion": "Nueva Loja, Sucumbíos",
          "peligros": ["Contaminación petrolera", "Deslizamientos", "Inundaciones"],
          "coordenadas": { "lat": "0.0860", "lng": "-76.8898" }
        },
        {
          "id": 6,
          "nombre": "Puerto Francisco de Orellana",
          "descripcion": "Zona estratégica de transporte fluvial",
          "ubicacion": "Orellana",
          "peligros": ["Inundaciones", "Erosión fluvial", "Lluvias intensas"],
          "coordenadas": { "lat": "-0.4620", "lng": "-76.9860" }
        },
        {
          "id": 7,
          "nombre": "Archidona",
          "descripcion": "Zona turística con cascadas y ríos",
          "ubicacion": "Archidona, Napo",
          "peligros": ["Deslizamientos", "Lluvias intensas", "Inundaciones"],
          "coordenadas": { "lat": "-0.9167", "lng": "-77.8000" }
        },
        {
          "id": 8,
          "nombre": "Shushufindi",
          "descripcion": "Zona petrolera en Sucumbíos",
          "ubicacion": "Shushufindi, Sucumbíos",
          "peligros": ["Contaminación de agua", "Deforestación", "Inundaciones"],
          "coordenadas": { "lat": "0.2167", "lng": "-76.6333" }
        },
        {
          "id": 9,
          "nombre": "Arajuno",
          "descripcion": "Comunidad indígena en Pastaza",
          "ubicacion": "Arajuno, Pastaza",
          "peligros": ["Deslizamientos", "Lluvias intensas", "Deforestación"],
          "coordenadas": { "lat": "-1.1667", "lng": "-78.0667" }
        },
        {
          "id": 10,
          "nombre": "Sucúa",
          "descripcion": "Zona agrícola y forestal en Morona Santiago",
          "ubicacion": "Sucúa, Morona Santiago",
          "peligros": ["Deslizamientos", "Inundaciones", "Erosión fluvial"],
          "coordenadas": { "lat": "-2.4500", "lng": "-78.1667" }
        },
        {
          "id": 11,
          "nombre": "Palora",
          "descripcion": "Zona de cultivos amazónicos",
          "ubicacion": "Palora, Morona Santiago",
          "peligros": ["Deslizamientos", "Erosión fluvial", "Lluvias intensas"],
          "coordenadas": { "lat": "-1.7000", "lng": "-78.0667" }
        },
        {
          "id": 12,
          "nombre": "Cuyabeno",
          "descripcion": "Reserva natural con ecosistemas amazónicos",
          "ubicacion": "Cuyabeno, Sucumbíos",
          "peligros": ["Deforestación", "Inundaciones", "Contaminación petrolera"],
          "coordenadas": { "lat": "0.0167", "lng": "-76.1333" }
        },
        {
          "id": 13,
          "nombre": "Loreto",
          "descripcion": "Zona con alta biodiversidad",
          "ubicacion": "Loreto, Orellana",
          "peligros": ["Deslizamientos", "Erosión", "Deforestación"],
          "coordenadas": { "lat": "-0.7000", "lng": "-77.3167" }
        },
        {
          "id": 14,
          "nombre": "Tiputini",
          "descripcion": "Área protegida dentro del Yasuní",
          "ubicacion": "Orellana",
          "peligros": ["Deforestación", "Contaminación petrolera", "Lluvias intensas"],
          "coordenadas": { "lat": "-0.7667", "lng": "-76.4667" }
        },
        {
          "id": 15,
          "nombre": "Dayuma",
          "descripcion": "Zona rural petrolera",
          "ubicacion": "Dayuma, Orellana",
          "peligros": ["Contaminación petrolera", "Inundaciones", "Deforestación"],
          "coordenadas": { "lat": "-0.6000", "lng": "-76.8667" }
        },
        {
          "id": 16,
          "nombre": "San Vicente",
          "descripcion": "Comunidad en la Amazonía norte",
          "ubicacion": "San Vicente, Sucumbíos",
          "peligros": ["Deforestación", "Inundaciones", "Desbordamiento de ríos"],
          "coordenadas": { "lat": "0.3500", "lng": "-76.8000" }
        },
        {
          "id": 17,
          "nombre": "Tarapoa",
          "descripcion": "Zona rural amazónica",
          "ubicacion": "Tarapoa, Sucumbíos",
          "peligros": ["Deforestación", "Contaminación de ríos", "Inundaciones"],
          "coordenadas": { "lat": "0.1167", "lng": "-76.3167" }
        },
        {
          "id": 18,
          "nombre": "Mera",
          "descripcion": "Ciudad cercana a la cordillera y selva",
          "ubicacion": "Mera, Pastaza",
          "peligros": ["Deslizamientos", "Lluvias intensas", "Erosión fluvial"],
          "coordenadas": { "lat": "-1.4667", "lng": "-78.0667" }
        },
        {
          "id": 19,
          "nombre": "Pangui",
          "descripcion": "Área minera en Zamora Chinchipe",
          "ubicacion": "El Pangui, Zamora Chinchipe",
          "peligros": ["Contaminación minera", "Deslizamientos", "Deforestación"],
          "coordenadas": { "lat": "-3.6333", "lng": "-78.5500" }
        },
        {
          "id": 20,
          "nombre": "Yantzaza",
          "descripcion": "Zona agrícola y minera",
          "ubicacion": "Yantzaza, Zamora Chinchipe",
          "peligros": ["Contaminación minera", "Deforestación", "Inundaciones"],
          "coordenadas": { "lat": "-3.8333", "lng": "-78.7667" }
        }
      ]
    }



]