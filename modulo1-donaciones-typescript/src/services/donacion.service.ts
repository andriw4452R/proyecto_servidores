import {
  obtenerDonaciones,
  crearDonacion,
  eliminarDonacion,
  Donacion
} from '../models/donacion.model';

export const listarDonaciones = async () => {
  return await obtenerDonaciones();
};

export const registrarDonacion = async (datos: Omit<Donacion, 'id'>) => {
  return await crearDonacion(datos);
};

export const borrarDonacion = async (id: number) => {
  await eliminarDonacion(id);
};
