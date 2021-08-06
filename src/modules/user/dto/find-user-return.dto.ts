import { UserORM } from '../user.entity';

export class FindUserReturnDto {
  data: UserORM[];
  total: number;
  take: number;
  skip: number;
}
