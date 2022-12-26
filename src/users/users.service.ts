import { Get, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { userDto } from './dto/user.dto';
import { users } from './entity/users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(users)
    private userRepository: Repository<users>
    ) {}

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(email: string){
    return await this.userRepository.findOneBy({email});
  }

  create(user: userDto) {
    return this.userRepository.save(user);
  }

  update(id: number, user: userDto) {
    return this.userRepository.update(id, user);
  }

  remove(id: number) {
    return this.userRepository.delete(id);
  }
}
