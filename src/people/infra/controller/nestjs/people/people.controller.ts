import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Inject,
  Param,
  Post,
  Query,
  ValidationPipe

} from "@nestjs/common"
import { ApiOperation, ApiTags, ApiDefaultResponse } from "@nestjs/swagger"
import { ApiErrorResponse } from "src/commons/decorators"
import { PeopleEnums } from "src/people/domain/enums/people.enums"
import { PeopleProvider } from "src/people/infra/ioc/nestjs/people.provider"
import { ValidatePeopleInputDto } from "./input/validate-coupon.input.dto"
import { IFindManyByTermsPeoplesQuery } from "src/people/application/queries/find-many-by-terms-peoples.query"
import { IFindOneByIdPeoplesQuery } from "src/people/application/queries/find-one-by-id-peoples.query"
import { ICreatePeopleCommands } from "src/people/application/commands/create.commands"
import { ICountPeoplesQuery } from "src/people/application/queries/count-peoples.query"
import { PeopleOutput } from 'src/people/infra/controller/nestjs/people'
import { CountPeopleOutput } from "src/people/infra/controller/nestjs/people/output/count.dto"

@ApiTags("Pessoas")
@Controller()
export class PeopleController {
  constructor(
    @Inject(PeopleProvider.Queries.PEOPLE_FIND_MANY_WITH_TERMS)
    private readonly findManyPeopleQuery: IFindManyByTermsPeoplesQuery,
    @Inject(PeopleProvider.Queries.PEOPLE_FIND_ONE_WITH_ID)
    private readonly findOnePeopleQuery: IFindOneByIdPeoplesQuery,
    @Inject(PeopleProvider.Commands.PEOPLE_CREATE)
    private readonly createPeopleCommand: ICreatePeopleCommands,
    @Inject(PeopleProvider.Queries.PEOPLE_COUNT)
    private readonly countPeopleQuery: ICountPeoplesQuery
  ) { }

  @ApiOperation({ description: "Create new people" })
  @Post('/pessoas')
  @ApiDefaultResponse({
    type: PeopleOutput,
    status: HttpStatus.OK
  })
  @ApiErrorResponse({
    description: "When the people is found.",
    message: PeopleEnums.Exceptions.PEOPLE_EXIST_IN_DB,
    status: HttpStatus.CONFLICT
  })
  async create(@Body(ValidationPipe) input: ValidatePeopleInputDto) {
    return this.createPeopleCommand.execute({
      nickname: input.apelido,
      name: input.nome,
      birthday: input.nascimento,
      stack: input.stack
    })
  }

  @ApiOperation({ description: "Get people with ID" })
  @Get("/pessoas/:id")
  @ApiDefaultResponse({
    type: PeopleOutput,
    status: HttpStatus.OK
  })
  @ApiErrorResponse({
    description: "When the people is not found.",
    message: PeopleEnums.Exceptions.NOT_FOUND_PEOPLE,
    status: HttpStatus.NOT_FOUND
  })
  async getWithId(@Param("id") id: string) {
    return this.findOnePeopleQuery.execute({
      id
    })
  }

  @ApiOperation({ description: "Get people with terms" })
  @Get('/pessoas')
  @ApiDefaultResponse({
    type: PeopleOutput,
    status: HttpStatus.OK
  })
  @ApiErrorResponse({
    description: "When the people is not found.",
    message: PeopleEnums.Exceptions.NOT_FOUND_PEOPLE,
    status: HttpStatus.NOT_FOUND
  })
  async getWithTerms(@Query("t") terms: string) {
    return this.findManyPeopleQuery.execute({
      terms
    })
  }

  @ApiOperation({ description: "Count people in DB" })
  @Get("/contagem-pessoas")
  @ApiDefaultResponse({
    type: CountPeopleOutput,
    status: HttpStatus.OK
  })
  async countPeople() {
    return this.countPeopleQuery.execute()
  }
}
