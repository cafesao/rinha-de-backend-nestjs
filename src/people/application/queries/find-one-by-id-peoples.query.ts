import { IQueryContract } from "src/commons/contracts"

export interface IFindOneByIdPeoplesQuery
  extends IQueryContract<
    IFindOneByIdPeoplesQuery.Input,
    IFindOneByIdPeoplesQuery.Output
  > {}

export namespace IFindOneByIdPeoplesQuery {
  export type Input = {
    id: string
  }

  export type Output = {
    id: string
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }
}
