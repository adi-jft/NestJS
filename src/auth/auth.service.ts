import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { userDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
        ){};

    async validateUser(email: string, password: string){
        const user=await this.usersService.findOne(email);
        if(user && user.password==password){
            return user;
        }
        return null;
    }

    async login(user: userDto) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
        };
    }
}
