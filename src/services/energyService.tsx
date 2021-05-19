/* eslint-disable @typescript-eslint/no-explicit-any */
export interface Strategy<T, U> {
  calculate(value: T): U;
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
