import { ApiProperty } from "@nestjs/swagger"
import { IsArray, IsDateString, IsNotEmpty, IsString, MaxLength, ValidateNested } from "class-validator"

export class ValidatePeopleInputDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "john-wick@any.com",
    required: true,
    maxLength: 32
  })
  apelido: string

  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    example: "96c4f952-ace3-45c4-bc64-10e7ba3345dd",
    required: true,
    maxLength: 100
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

  @IsArray()
  @MaxLength(32, { each: true })
  @IsString({ each: true })
  @ApiProperty({
    isArray: true,
    example: ["Node", "C#", "Java"],
    required: false,
  })
  stack: string[];
}
