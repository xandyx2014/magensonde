import { Strategy } from "./energyService";

export interface ChumleaPesoData {
  circunferenciaBrazo: number;
  circunferenciaPantorilla: number;
  pliegueSubescapular: number;
  alturaTalonRodilla: number;
}
export class ChumleaPesoHombres implements Strategy<ChumleaPesoData, number> {
  calculate(value: ChumleaPesoData): number {
    return (
      1.73 * value.circunferenciaBrazo +
      0.98 * value.circunferenciaPantorilla +
      0.37 * value.pliegueSubescapular +
      1.16 * value.alturaTalonRodilla
    );
  }
}
export class ChumleaPesoMujeres implements Strategy<ChumleaPesoData, number> {
  calculate(value: ChumleaPesoData): number {
    return (
      0.98 * value.circunferenciaBrazo +
      1.27 * value.circunferenciaPantorilla +
      0.4 * value.pliegueSubescapular +
      0.87 * value.alturaTalonRodilla
    );
  }
}
