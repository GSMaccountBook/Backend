import { Body, Get, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
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

    @Get()
    async getdata() {
        const data = await this.userdataservice.getData()
        return data;
    }

}
