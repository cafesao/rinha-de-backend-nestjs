import { FactoryProvider } from "@nestjs/common"
import { ICreatePeopleCommands } from "src/people/application/commands/create.commands"
import { PeopleProvider } from "../people.provider"
import { IPeopleRepository } from "src/people/domain/repositories/people.repository"
import { CreatePeopleCommandPrismaAdapter } from "src/people/infra/commands/prisma/create-peoples.commands"

export class CreatePeopleCommandFactoryProvider {
  static register(): FactoryProvider<ICreatePeopleCommands> {
    return {
      provide: PeopleProvider.Commands.PEOPLE_CREATE,
      useFactory: (peopleRepository: IPeopleRepository) =>
        new CreatePeopleCommandPrismaAdapter(peopleRepository),
      inject: [PeopleProvider.Repository.PEOPLES]
    }
  }
}
