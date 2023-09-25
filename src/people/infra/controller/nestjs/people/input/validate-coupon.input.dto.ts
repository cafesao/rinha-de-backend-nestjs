import { ApiProperty } from "@nestjs/swagger"
import { Transform, Type } from "class-transformer"
import { IsArray, IsDateString, IsNotEmpty, IsString } from "class-validator"

export class ValidatePeopleInputDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "john-wick@any.com",
    required: true
  })
  apelido: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "96c4f952-ace3-45c4-bc64-10e7ba3345dd",
    required: true
  })
  nome: string

  @IsNotEmpty()
  @IsString()
  @IsDateString({})
  @ApiProperty({
    example: "2000-08-29",
    required: true
  })
  nascimento: string

  @IsNotEmpty()
  @Transform(({ value }) => {
    if (!Array.isArray(value)) return [value]
    return value
  })
  @Type(() => String)
  @IsArray()
  @ApiProperty({
    example: ["Node", "C#", "Java"],
    required: true
  })
  stack: string[]
}
