import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, ObjectLiteral, Repository } from 'typeorm';
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
    return this.userRepository.findOneOrFail({ where });
  }
}
