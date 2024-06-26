import { IsInt, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCatDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @Type(() => Number)
  readonly age: number;

  @IsString()
  readonly breed: string;
}
