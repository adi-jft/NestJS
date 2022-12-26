import { Get, Injectable } from '@nestjs/common';
import { userData } from 'src/data';
import { userDto } from './dto/user.dto';

@Injectable()
export class UsersService {
  constructor(private userData: userData) {}

  findAll() {
    return this.userData.userarr;
  }

  async findOne(email: string){
    return await this.userData.userarr.find((e) => e.email==email);
  }

  create(user: userDto) {
    user.id = this.userData.userarr.length + 1;
    this.userData.userarr.push(user);
    return this.userData.userarr;
  }

  update(id: number, user: userDto) {
    console.log(user);
    let ind = this.userData.userarr.findIndex((e) => e.id == id);
    console.log(ind);
    this.userData.userarr[ind] = user;
    return this.userData.userarr;
  }

  remove(id: number) {
    let ind = this.userData.userarr.findIndex((e) => e.id == id);
    this.userData.userarr.splice(ind, 1);
    return this.userData.userarr;
  }
}
