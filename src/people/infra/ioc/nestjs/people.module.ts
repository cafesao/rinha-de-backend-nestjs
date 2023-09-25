import { Module } from "@nestjs/common"
import { queriesProviders } from "./queries"
import { commandsProviders } from "./commands"
import { PeopleController } from "../../controller/nestjs/people/people.controller"
import { repositoriesProviders } from "./repositories"

@Module({
  providers: [
    ...repositoriesProviders,
    ...queriesProviders,
    ...commandsProviders
  ],
  controllers: [PeopleController]
})
export class PeopleModule {}
