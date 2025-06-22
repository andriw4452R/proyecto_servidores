// src/services/donante.service.ts
import supabase from '../config/db';

export async function registrarDonante(donante: {
  nombre: string;
  tipo: string;
  correo: string;
  telefono: string;
  direccion?: string;
  fecha_registro: string;
}) {
  const { data, error } = await supabase
    .from('donantes')
    .insert([donante])
    .select();

  if (error) throw error;
  return data?.[0];
}

export async function listarDonantes() {
  const { data, error } = await supabase.from('donantes').select();
  if (error) throw error;
  return data;
}

export async function actualizarDonante(id: number, donante: {
  nombre?: string;
  tipo?: string;
  correo?: string;
  telefono?: string;
  direccion?: string;
  fecha_registro?: string;
}) {
  const { data, error } = await supabase
    .from('donantes')
    .update(donante)
    .eq('id', id)
    .select();

  if (error) throw error;
  return data?.[0];
}

export async function borrarDonante(id: number) {
  const { error } = await supabase
    .from('donantes')
    .delete()
    .eq('id', id); // ← Corregido aquí

  if (error) throw error;
}
