import { IQueryContract } from "src/commons/contracts"

export interface ICountPeoplesQuery
  extends IQueryContract<ICountPeoplesQuery.Input, ICountPeoplesQuery.Output> {}

export namespace ICountPeoplesQuery {
  export type Input = {}

  export type Output = {
    count: number
  }
}
