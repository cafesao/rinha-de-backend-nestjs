import { BaseEntity } from "src/commons/entities/base"

export class PeopleDomainEntity extends BaseEntity {
  nickname: string

  name: string

  birthday: string

  stack: string[]

  constructor(input?: Partial<PeopleDomainEntity.Input>) {
    super()
    Object.assign(this, input)
  }

  getState(): PeopleDomainEntity.State {
    return {
      id: this.id,
      name: this.name,
      nickname: this.nickname,
      birthday: this.birthday,
      stack: this.stack
    }
  }
}

export namespace PeopleDomainEntity {
  export type Input = {
    id: string
    name: string
    nickname: string
    birthday: string
    stack: string[]
  }

  export type State = Input & {
    // create here additional keys for entity
  }
}
