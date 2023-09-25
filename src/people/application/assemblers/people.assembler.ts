import { Assembler } from "src/commons/assembler/core.assembler"
import { PeopleDomainEntity } from "src/people/domain/entities/people.entity"

export class PeopleAssembler extends Assembler {
  static assembly(input?: PeopleAssembler.Input): PeopleDomainEntity {
    if (!input) return new PeopleDomainEntity()
    return new PeopleDomainEntity({
      id: input.id,
      name: input.name,
      nickname: input.nickname,
      birthday: input.birthday,
      stack: input.stack
    })
  }
}

export namespace PeopleAssembler {
  export type Input = Partial<{
    id: string
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }>
}
