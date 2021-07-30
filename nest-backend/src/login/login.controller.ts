import { Body, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { LoginUser } from 'userdata/login.interface';
import { UserdataService } from 'userdata/userdata.service'

@Controller('login')
export class LoginController {
    constructor(private readonly userdataservice: UserdataService) {}

    @Post()
    async findAll(@Body() loginuser: LoginUser) {
        
    }

    @Get()
    async getdata() {
        const data = await this.userdataservice.getData()
        return data;
    }

}
