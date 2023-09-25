import { FactoryProvider } from "@nestjs/common"
import { CreatePeopleCommandFactoryProvider } from "./create-peoples-command-factory.provider"

export const commandsProviders: FactoryProvider[] = [
  CreatePeopleCommandFactoryProvider.register()
]
