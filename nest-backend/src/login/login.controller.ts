import { Body, Get, HttpException, HttpStatus, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { ICreateUserdata } from 'userdata/userdata.interface';
import { UserdataService } from 'userdata/userdata.service'

let userdata = [
    {
        id:'ingyo',
        password:'1234'
    },
    {
        id:'john',
        password:'qwer'
    }
]


@Controller('login')
export class LoginController {
    constructor(private readonly userdataservice: UserdataService) {}

    @Post()
    async findAll(@Body() createUserdataDto: ICreateUserdata) {
        const idCheck = await this.userdataservice.findIdCheck(createUserdataDto.userid);
        if(idCheck != undefined) {
            throw new HttpException('duplicated userid',HttpStatus.BAD_REQUEST)
        } else {
            const result = await this.userdataservice.createUserdata(createUserdataDto);
            return "회원가입 성공";
        }

    }
    @Get()
    async getdata() {
        const data = await this.userdataservice.getData()
        return data;
    }

}
