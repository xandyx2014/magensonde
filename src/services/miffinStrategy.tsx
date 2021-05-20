import { Strategy } from "./energyService";

export interface MiffinData {
  peso: number;
  talla: number;
  edad: number;
}
export class MiffinHombres implements Strategy<MiffinData, number> {
  calculate(value: MiffinData): number {
    return 10 * value.peso + 6.25 * value.talla - 5 * value.edad + 5;
  }
}
export class MiffinMujeres implements Strategy<MiffinData, number> {
  calculate(value: MiffinData): number {
    return 10 * value.peso + 6.25 * value.talla - 5 * value.edad + 161;
  }
}
