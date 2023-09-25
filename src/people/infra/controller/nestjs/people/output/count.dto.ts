import { ApiProperty } from '@nestjs/swagger';

export class CountPeopleOutput {
    @ApiProperty({
        example: 12
    })
    count: number;
}