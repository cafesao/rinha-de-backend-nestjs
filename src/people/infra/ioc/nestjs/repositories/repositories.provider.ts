import { Provider, FactoryProvider } from "@nestjs/common"
import { PeopleRepositoryFactoryProvider } from "./people-repository-factory.provider"

export const repositoriesProviders: Provider[] | FactoryProvider[] = [
  PeopleRepositoryFactoryProvider.register()
]
