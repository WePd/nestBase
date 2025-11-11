import { ApiProperty } from '@nestjs/swagger';

export class CreateListDto {
  @ApiProperty({example: '张三'})
  name: string
  @ApiProperty()

  age: number
}
