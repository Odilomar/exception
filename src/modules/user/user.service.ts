import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, ObjectLiteral, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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

  async create(args: CreateUserDto) {
    return this.userRepository.save(this.userRepository.create({ ...args }));
  }

  async update(id: number, args: UpdateUserDto) {
    const user = await this.findOne({ id });
    Object.assign(user, args);
    return this.userRepository.save(user);
  }

  async delete(id: number) {
    await this.findOne({ id });
    await this.userRepository.delete({ id });
  }
}
