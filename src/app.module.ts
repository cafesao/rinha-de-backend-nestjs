import { Module } from "@nestjs/common"
import { PeopleModule } from "./people/infra/ioc/nestjs/people.module"

@Module({
  imports: [PeopleModule],
  controllers: [],
  providers: []
})
export class AppModule {}
