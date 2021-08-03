import { Body, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { LoginUser } from 'userdata/login.interface';
import { UserdataService } from 'userdata/userdata.service'
import { AuthService } from 'src/auth/auth.service';

@Controller('login')
export class LoginController {
    
    constructor(private readonly userdataservice: UserdataService,private authService: AuthService) {}
    @Post()
    async findAll(@Body() loginuser: LoginUser) {
        const result = await this.userdataservice.findIdCheck(loginuser.userid);
        if(result == undefined) {
            throw new HttpException('아이디를 찾을 수 없습니다',HttpStatus.BAD_REQUEST);
        } else {
            if(result.password == loginuser.password) {
                this.authService.IssueJWT(loginuser);
                return "로그인 성공"
            } else {
                throw new HttpException('failed to login',HttpStatus.BAD_REQUEST)
            }
        }
    }


    @Get()
    async getdata() {
        const data = await this.userdataservice.getData()
        return data;
    }

}
