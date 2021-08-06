import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
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
}
