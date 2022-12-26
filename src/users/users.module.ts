import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userData } from 'src/data';
import { users } from './entity/users.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([users])],
  controllers: [UsersController],
  providers: [UsersService, userData],
  exports: [UsersService]
})
export class UsersModule {}
