import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserORM } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(): Promise<UserORM[]> {
    return this.userService.find();
  }

  @Get('/:id')
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<UserORM> {
    return this.userService.findOne({ id });
  }

  @Post()
  async create(@Body() args: CreateUserDto): Promise<UserORM> {
    return this.userService.create(args);
  }
}
