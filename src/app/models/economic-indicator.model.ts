export class Indicator {
  version: string;
  autor: string;
  fecha: string;
  uf: Data;
  ivp: Data;
  dolar: Data;
  dolar_intercambio: Data;
  euro: Data;
  ipc: Data;
  utm: Data;
  imacec: Data;
  tpm: Data;
  libra_cobre: Data;
  tasa_desempleo: Data;
  bitcoin: Data;
}

class Data {
  codigo: string;
  nombre: string;
  unidad_medida: string;
  fecha: string;
  valor: number;
}

export class IndicatorInfo {
  version: number;
  autor: string;
  codigo: string;
  nombre: string;
  unidad_medida: string;
  serie: [
    {
      fecha: string;
      valor: number;
    }
  ];
}
