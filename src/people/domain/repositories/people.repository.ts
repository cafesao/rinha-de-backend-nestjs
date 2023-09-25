import { PeopleDomainEntity } from "../entities/people.entity"

export interface IPeopleRepository {
  create(input: IPeopleRepository.Create): Promise<PeopleDomainEntity>
}

export namespace IPeopleRepository {
  export type Create = {
    nickname: string
    name: string
    birthday: string
    stack: string[]
  }
}
