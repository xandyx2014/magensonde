import { Strategy } from "./energyService";

export interface RabitoData {
  circuferenciaBrazo: number;
  circuferenciaAbdominal: number;
  circuferenciaPantorilla: number;
}
export class RabitoHombres implements Strategy<RabitoData, number> {
  calculate(value: RabitoData): number {
    return (
      0.5759 * value.circuferenciaBrazo +
      0.5263 * value.circuferenciaPantorilla +
      1.2452 * value.circuferenciaPantorilla -
      4.868 * 1 -
      32.9242
    );
  }
}
export class RabitoMujeres implements Strategy<RabitoData, number> {
  calculate(value: RabitoData): number {
    return (
      0.5759 * value.circuferenciaBrazo +
      0.5263 * value.circuferenciaPantorilla +
      1.2452 * value.circuferenciaPantorilla -
      4.868 * 2 -
      32.9242
    );
  }
}
