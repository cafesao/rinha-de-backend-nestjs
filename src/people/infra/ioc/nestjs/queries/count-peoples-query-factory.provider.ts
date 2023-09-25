import { ClassProvider } from "@nestjs/common"
import { ICountPeoplesQuery } from "src/people/application/queries/count-peoples.query"
import { PeopleProvider } from "../people.provider"
import { CountPeopleQueryPrismaAdapter } from "src/people/infra/queries/prisma/count-peoples.query"

export class CountPeoplesQueryFactoryProvider {
  static register(): ClassProvider<ICountPeoplesQuery> {
    return {
      provide: PeopleProvider.Queries.PEOPLE_COUNT,
      useClass: CountPeopleQueryPrismaAdapter
    }
  }
}
