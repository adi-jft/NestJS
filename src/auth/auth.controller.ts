import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { userDto } from 'src/users/dto/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService){};

    @Get("/get")
    get(){
        return "i am auth get route";
    }

    @UseGuards(AuthGuard("local"))
    // @Post("/login")
    // login(@Body() user: userDto){
    //     return this.authService.validateUser(user.email, user.password);
    // }
    @Post("/login")
    async login(@Body() user: userDto){
        return this.authService.login(user);
    }
}
