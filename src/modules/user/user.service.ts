import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, ObjectLiteral, Repository } from 'typeorm';
import { USERNOTFOUND } from './user.const';
import { UserORM } from './user.entity';

type WhereFind<T> =
  | string
  | ObjectLiteral
  | FindConditions<T>
  | FindConditions<T>[];
@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserORM)
    private readonly userRepository: Repository<UserORM>,
  ) {}

  async find(where?: WhereFind<UserORM>) {
    return this.userRepository.find({ where });
  }

  async findOne(where?: WhereFind<UserORM>) {
    const user = await this.userRepository.findOne({ where });
    if (!user) throw new NotFoundException(USERNOTFOUND);
    return user;
  }
}
