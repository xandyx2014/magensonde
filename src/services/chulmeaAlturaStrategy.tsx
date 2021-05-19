import { Strategy } from "./energyService";

export interface ChulmeaData {
  alturaTalonRodilla: number;
  edad: number;
}
export class ChulmeaHombres implements Strategy<ChulmeaData, number> {
  calculate(value: ChulmeaData): number {
    return 2.02 * value.alturaTalonRodilla - 0.04 * value.edad + 64.19;
  }
}
export class ChulmeaMujeres implements Strategy<ChulmeaData, number> {
  calculate(value: ChulmeaData): number {
    return 1.83 * value.alturaTalonRodilla - 0.24 * value.edad + 84.88;
  }
}
