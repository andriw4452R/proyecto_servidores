import axios from 'axios';

export const resolvers = {
  Query: {
    donantes: async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/donante');
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
    getDonante: async (_: any, { id }: any) => {
      try {
        const response = await axios.get(`http://localhost:3000/api/donante/${id}`);
        const donante = response.data;
        return {
          id: donante.id_donante,
          nombre: donante.nombre,
          correo: donante.correo,
          telefono: donante.telefono,
        };
      } catch (error) {
        console.error('Error al obtener donante:', error);
        return null;
      }
    },
  },

  Mutation: {
    crearDonante: async (_: any, { input }: any) => {
      try {
        const response = await axios.post('http://localhost:3000/api/donante', input);
        const donante = response.data;
        return {
          id: donante.id_donante,
          nombre: donante.nombre,
          correo: donante.correo,
          telefono: donante.telefono,
        };
      } catch (error) {
        console.error('Error al crear donante:', error);
        return null;
      }
    },
  },
};
