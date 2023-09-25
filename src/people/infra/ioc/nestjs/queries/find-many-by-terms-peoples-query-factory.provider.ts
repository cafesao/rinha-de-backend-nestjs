import { ClassProvider } from "@nestjs/common"
import { PeopleProvider } from "../people.provider"
import { IFindManyByTermsPeoplesQuery } from "src/people/application/queries/find-many-by-terms-peoples.query"
import { FindManyByTermsPeoplesQueryPrismaAdapter } from "src/people/infra/queries/prisma/find-many-by-terms-peoples.query"

export class FindManyByTermsPeoplesQueryFactoryProvider {
  static register(): ClassProvider<IFindManyByTermsPeoplesQuery> {
    return {
      provide: PeopleProvider.Queries.PEOPLE_FIND_MANY_WITH_TERMS,
      useClass: FindManyByTermsPeoplesQueryPrismaAdapter
    }
  }
}
