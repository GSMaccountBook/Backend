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
    findAll(@Body() data) {
        userdata.forEach(element => {
            if(element.id == data.id) {
                if(element.password == data.password) {
                    console.log('login success')
                } else {
                    console.log('login failed');
                }
            }
        });
    }
    @Get()
    async getdata() {
        const data = await this.userdataservice.getData()
        return data;
    }

}
