import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class Demo {
  @ApiPropertyOptional({
    type: Number,
    description: 'This is an optional property',
  })
  id: number;
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
