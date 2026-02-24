export interface Kilometraje {
  id: string;
  fecha: string; // ISO date string
  inicial: number;
  final: number;
}

export function calcularRecorrido(k: Pick<Kilometraje, 'inicial' | 'final'>): number {
  return k.final - k.inicial;
}
