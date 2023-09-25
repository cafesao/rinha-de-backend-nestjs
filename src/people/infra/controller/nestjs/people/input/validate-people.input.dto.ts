import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDateString, IsNotEmpty, IsString, MaxLength, ValidateNested } from "class-validator"

export class ValidatePeopleInputDto {
  @ApiProperty({
    example: "john-wick@any.com",
    required: true,
    maxLength: 3
  })
  apelido: string

  @ApiProperty({
    example: "96c4f952-ace3-45c4-bc64-10e7ba3345dd",
    required: true,
    maxLength: 100
  })
  nome: string

  @ApiProperty({
    example: "2000-08-29",
    required: true
  })
  nascimento: string

  @ApiProperty({
    isArray: true,
    example: ["Node", "C#", "Java"],
    required: false,
  })
  stack: string[];
}
