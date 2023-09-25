import { NotFoundException } from "@nestjs/common"
import { PrismaClient } from "@prisma/client"
import { PeopleAssembler } from "src/people/application/assemblers/people.assembler"
import { IFindManyByTermsPeoplesQuery } from "src/people/application/queries/find-many-by-terms-peoples.query"
export class FindManyByTermsPeoplesQueryPrismaAdapter
  implements IFindManyByTermsPeoplesQuery {
  private readonly client: PrismaClient
  constructor() {
    this.client = new PrismaClient()
  }

  async execute(
    input: IFindManyByTermsPeoplesQuery.Input
  ): Promise<IFindManyByTermsPeoplesQuery.Output> {
    const peoples = await this.client.people.findMany({
      where: {
        OR: [
          { name: { contains: input.terms } },
          { nickname: { contains: input.terms } },
          { stack: { has: input.terms } }
        ]
      }
    })

    if (!peoples || peoples.length === 0) {
      throw new NotFoundException()
    }

    return peoples.map((value) => PeopleAssembler.assembly(value))
  }
}
