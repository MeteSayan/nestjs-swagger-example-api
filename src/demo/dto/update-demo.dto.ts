import { ApiProperty } from '@nestjs/swagger';

export class UpdateDemoDto {
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  name: string;
  @ApiProperty({
    type: String,
    description: 'This is a required property',
  })
  abbreviation: string;
}
