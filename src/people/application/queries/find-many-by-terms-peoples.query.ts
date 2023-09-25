import { IQueryContract } from "src/commons/contracts"

export interface IFindManyByTermsPeoplesQuery
  extends IQueryContract<
    IFindManyByTermsPeoplesQuery.Input,
    IFindManyByTermsPeoplesQuery.Output
  > {}

export namespace IFindManyByTermsPeoplesQuery {
  export type Input = {
    terms: string
  }

  export type Output = {
    id: string
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }[]
}
