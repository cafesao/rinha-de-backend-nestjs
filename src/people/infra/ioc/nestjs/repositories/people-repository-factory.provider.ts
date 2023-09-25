import { ClassProvider } from "@nestjs/common"
import { PeopleProvider } from "../people.provider"
import { IPeopleRepository } from "src/people/domain/repositories/people.repository"
import { PeopleRepositoryPrismaAdapter } from "src/people/infra/repositories/prisma/people.repository"

export class PeopleRepositoryFactoryProvider {
  static register(): ClassProvider<IPeopleRepository> {
    return {
      provide: PeopleProvider.Repository.PEOPLES,
      useClass: PeopleRepositoryPrismaAdapter
    }
  }
}
