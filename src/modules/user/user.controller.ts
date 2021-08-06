import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserReturnDto } from './dto/find-user-return.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserORM } from './user.entity';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async find(@Query() args: FindUserDto): Promise<FindUserReturnDto> {
    return this.userService.find(args);
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
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() args: UpdateUserDto,
  ) {
    return this.userService.update(id, args);
  }

  @Delete('/:id')
  @HttpCode(204)
  async delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
