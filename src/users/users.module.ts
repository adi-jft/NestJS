import { Module } from '@nestjs/common';
import { userData } from 'src/data';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, userData],
  exports: [UsersService]
})
export class UsersModule {}
