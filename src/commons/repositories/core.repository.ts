//import { BaseDataMapper } from "@srcv2/shared/infra/database/typeorm/data-mappers/base"
import { Assembler } from "../assembler/core.assembler"
import { BaseEntity } from "../entities/base"

export class CoreTypeOrmRepository {
  constructor() {
    //
  }

  serializeOne(data: BaseEntity, assembler: typeof Assembler): any {
    return assembler.assembly(data)
  }

  serializeMany(data: BaseEntity[], assembler: typeof Assembler): any[] {
    return data.map((value) => assembler.assembly(value))
  }
}
