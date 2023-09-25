import { CoreTypeOrmRepository } from "src/commons/repositories/core.repository"
import { IPeopleRepository } from "src/people/domain/repositories/people.repository"
import { PrismaClient } from "@prisma/client"
import { PeopleDomainEntity } from "src/people/domain/entities/people.entity"
import { PeopleAssembler } from "src/people/application/assemblers/people.assembler"
import { UnprocessableEntityException } from "@nestjs/common"
import { PeopleEnums } from "src/people/domain/enums/people.enums"

export class PeopleRepositoryPrismaAdapter
  extends CoreTypeOrmRepository
  implements IPeopleRepository {
  private readonly client: PrismaClient

  constructor() {
    super()
    this.client = new PrismaClient()
  }

  async create(input: IPeopleRepository.Create): Promise<PeopleDomainEntity> {
    try {
      const people = await this.client.people.create({
        data: {
          nickname: input.nickname,
          name: input.name,
          birthday: input.birthday,
          stack: input.stack.length !== 0 ? input.stack : []
        }
      })
      return this.serializeOne(people, PeopleAssembler)
    } catch (error) {
      throw new UnprocessableEntityException(PeopleEnums.Exceptions.PEOPLE_EXIST_IN_DB)
    }

  }
}
