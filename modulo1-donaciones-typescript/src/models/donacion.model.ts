import supabase from '../config/db';

export interface Donacion {
  id: number;
  id_donante: number;
  fecha: string;
  estado: string;
  prioridad: string;
}

export const obtenerDonaciones = async () => {
  const { data, error } = await supabase
    .from('donaciones')
    .select('*');

  if (error) throw error;
  return data;
};

export const crearDonacion = async (donacion: Omit<Donacion, 'id'>) => {
  const { data, error } = await supabase
    .from('donaciones')
    .insert([donacion])
    .select();

  if (error) throw error;
  return data[0];
};

export const eliminarDonacion = async (id: number) => {
  const { error } = await supabase
    .from('donaciones')
    .delete()
    .eq('id', id);

  if (error) throw error;
};
