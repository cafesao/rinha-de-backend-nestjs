import { IsNotEmpty, IsString } from "class-validator";

export class ValidateTermsInputDto {
    @IsNotEmpty()
    @IsString()
    t: string;
}