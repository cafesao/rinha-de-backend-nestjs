import { ICommandContract } from "src/commons/contracts"

export interface ICreatePeopleCommands
  extends ICommandContract<
    ICreatePeopleCommands.Input,
    ICreatePeopleCommands.Output
  > {}

export namespace ICreatePeopleCommands {
  export type Input = {
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }

  export type Output = {
    id: string
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }
}
