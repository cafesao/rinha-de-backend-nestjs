import { ApiProperty } from '@nestjs/swagger';

export class PeopleOutput {
    @ApiProperty({
        example: '7fcd36e4-3fec-4033-8a07-d95cd193fc7a',
    })
    id: string;

    @ApiProperty({
        example: 'pedro',
    })
    nickname: string;

    @ApiProperty({
        example: 'Gabriel',
    })
    name: string

    @ApiProperty({
        example: '2020-12-01',
    })
    birthday: string

    @ApiProperty({
        example: ['Node', 'Go'],
    })
    stack: string[]
}