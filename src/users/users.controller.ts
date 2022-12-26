import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { userDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get('/get')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/post')
  create(@Body() user: userDto) {
    return this.usersService.create(user);
  }

  @Patch('/patch/:id')
  update(@Param('id') id: string, @Body() user: userDto) {
    return this.usersService.update(Number(id), user);
  }

  @Delete('/delete/:id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(Number(id));
  }
}
