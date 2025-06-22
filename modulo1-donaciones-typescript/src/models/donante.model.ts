export interface Donante {
  id_donante?: number;
  nombre: string;
  tipo: 'persona' | 'empresa';
  correo: string;
  telefono: string;
  direccion?: string;
  fecha_registro: string; // formato YYYY-MM-DD
}
