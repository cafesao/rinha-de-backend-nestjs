import { ClassProvider } from "@nestjs/common"
import { PeopleProvider } from "../people.provider"
import { IFindOneByIdPeoplesQuery } from "src/people/application/queries/find-one-by-id-peoples.query"
import { FindOneByIdPeoplesQueryPrismaAdapter } from "src/people/infra/queries/prisma/find-one-by-id-peoples.query"

export class FindOneByIdPeoplesQueryFactoryProvider {
  static register(): ClassProvider<IFindOneByIdPeoplesQuery> {
    return {
      provide: PeopleProvider.Queries.PEOPLE_FIND_ONE_WITH_ID,
      useClass: FindOneByIdPeoplesQueryPrismaAdapter
    }
  }
}
