import { IsString, IsInt, IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsInt()
  age: number;

  @IsOptional()
  @IsString()
  job: string;
}
