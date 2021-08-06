import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserORM } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(): Promise<UserORM[]> {
    return this.userService.find({});
  }

  @Get('/:id')
  async findOne(@Param('id', new ParseIntPipe()) id: number): Promise<UserORM> {
    return this.userService.findOne({ id });
  }

  @Post()
  async create(@Body() args: CreateUserDto): Promise<UserORM> {
    return this.userService.create(args);
  }

  @Put('/:id')
  @HttpCode(201)
  async update(@Param('id') id: number, @Body() args: UpdateUserDto) {
    return this.userService.update(id, args);
  }
}
