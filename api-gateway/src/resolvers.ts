import axios from 'axios';

export const resolvers = {
  Query: {
    donantes: async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/donante');

        // Mapeamos id_donante a id
        return response.data.map((donante: any) => ({
          id: donante.id_donante,
          nombre: donante.nombre,
          correo: donante.correo,
          telefono: donante.telefono,
        }));
      } catch (error) {
        console.error('Error al obtener donantes:', error);
        return [];
      }
    },
  },
};
