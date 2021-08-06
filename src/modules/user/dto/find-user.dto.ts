import { Type } from 'class-transformer';
import { IsInt, IsOptional } from 'class-validator';
import { DEFAULT_SKIP, DEFAULT_TAKE } from 'src/utils/utils.const';
import { UpdateUserDto } from './update-user.dto';

export class FindUserDto extends UpdateUserDto {
  @IsOptional()
  @IsInt()
  @Type(() => Number)
  take: number = DEFAULT_TAKE;

  @IsOptional()
  @IsInt()
  @Type(() => Number)
  skip: number = DEFAULT_SKIP;
}
