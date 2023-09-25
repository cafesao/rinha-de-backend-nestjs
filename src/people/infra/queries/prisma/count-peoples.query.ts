import { PrismaClient } from "@prisma/client"
import { ICountPeoplesQuery } from "src/people/application/queries/count-peoples.query"
export class CountPeopleQueryPrismaAdapter implements ICountPeoplesQuery {
  private readonly client: PrismaClient
  constructor() {
    this.client = new PrismaClient()
  }

  async execute(
    input: ICountPeoplesQuery.Input
  ): Promise<ICountPeoplesQuery.Output> {
    const people = await this.client.people.count()
    return {
      count: people
    }
  }
}
