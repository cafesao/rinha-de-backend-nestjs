import { Provider, FactoryProvider } from "@nestjs/common"
import { FindManyByTermsPeoplesQueryFactoryProvider } from "./find-many-by-terms-peoples-query-factory.provider"
import { FindOneByIdPeoplesQueryFactoryProvider } from "./find-one-by-id-peoples-query-factory.provider"
import { CountPeoplesQueryFactoryProvider } from "./count-peoples-query-factory.provider"

export const queriesProviders: Provider[] | FactoryProvider[] = [
  FindManyByTermsPeoplesQueryFactoryProvider.register(),
  FindOneByIdPeoplesQueryFactoryProvider.register(),
  CountPeoplesQueryFactoryProvider.register()
]
