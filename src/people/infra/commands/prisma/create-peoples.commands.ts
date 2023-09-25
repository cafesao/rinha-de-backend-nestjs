import { ICreatePeopleCommands } from "src/people/application/commands/create.commands"
import { PeopleProvider } from "../../ioc/nestjs/people.provider"
import { Inject } from "@nestjs/common"
import { IPeopleRepository } from "src/people/domain/repositories/people.repository"
export class CreatePeopleCommandPrismaAdapter implements ICreatePeopleCommands {
  constructor(
    @Inject(PeopleProvider.Repository.PEOPLES)
    private readonly peopleRepository: IPeopleRepository
  ) {
    //
  }

  async execute(
    input: ICreatePeopleCommands.Input
  ): Promise<ICreatePeopleCommands.Output> {
    return await this.peopleRepository.create({
      nickname: input.nickname,
      name: input.name,
      birthday: input.birthday,
      stack: input.stack
    })
  }
}
