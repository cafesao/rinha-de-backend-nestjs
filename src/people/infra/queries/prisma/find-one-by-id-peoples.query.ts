import { NotFoundException } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"
import { PeopleAssembler } from "src/people/application/assemblers/people.assembler"
import { IFindOneByIdPeoplesQuery } from "src/people/application/queries/find-one-by-id-peoples.query"
export class FindOneByIdPeoplesQueryPrismaAdapter
  implements IFindOneByIdPeoplesQuery {
  private readonly client: PrismaClient
  constructor() {
    this.client = new PrismaClient()
  }

  async execute(
    input: IFindOneByIdPeoplesQuery.Input
  ): Promise<IFindOneByIdPeoplesQuery.Output> {
    const people = await this.client.people.findUnique({
      where: {
        id: input.id
      }
    })

    if (!people) {
      throw new NotFoundException()
    }

    return PeopleAssembler.assembly(people)
  }
}
