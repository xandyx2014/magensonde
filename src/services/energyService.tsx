/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Strategy<T, U> {
  calculate(value: T): U;
}
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
export class Context<T, U> {
  private strategy: Strategy<T, U>;
  constructor(strategy: Strategy<T, U>) {
    this.strategy = strategy;
  }
  public calculate(value: T): U {
    return this.strategy.calculate(value);
  }
}
