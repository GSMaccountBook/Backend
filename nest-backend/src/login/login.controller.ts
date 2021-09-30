import { Body, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/login/dto/login.dto';
import { UserdataService } from 'src/userdata/userdata.service'
import { AuthService } from 'src/auth/auth.service';
import { LoginService } from './login.service';
import * as bcrypt from 'bcrypt'

@Controller('login')
export class LoginController {
    constructor(private readonly userdataservice:UserdataService,private readonly loginservice:LoginService,private readonly authservice:AuthService) {}
    @Post()
    async findAll(@Body() loginuser: LoginDto) {
        const result = await this.userdataservice.findIdCheck(loginuser.userid);
        if(result == undefined) {
            throw new HttpException('아이디를 찾을 수 없습니다',HttpStatus.BAD_REQUEST);
        } else {
            let login_result = await this.loginservice.passwordCheck(result.userid,loginuser.password)
            if(login_result) {
                this.authservice.IssueJWT(loginuser);
                return "로그인 성공"
            } else {
                throw new HttpException('failed to login',HttpStatus.BAD_REQUEST)
            }
            
        }
    }
}
