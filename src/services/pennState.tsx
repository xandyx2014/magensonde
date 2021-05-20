import { Strategy } from "./energyService";

export interface PennData {
  miffin: number;
  temperaturaMax: number;
  ventilacion: number;
}
export class PennHombres implements Strategy<PennData, number> {
  calculate(value: PennData): number {
    return (
      0.96 * value.miffin +
      167 * value.temperaturaMax +
      value.ventilacion * 31 -
      6212
    );
  }
}
export class PennMujeres implements Strategy<PennData, number> {
  calculate(value: PennData): number {
    return (
      0.71 * value.miffin +
      85 * value.temperaturaMax +
      value.ventilacion * 64 -
      3085
    );
  }
}
