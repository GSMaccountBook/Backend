import { Body, Req } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
//import { LoginService } from './login.service';

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
    @Post()
    findAll(@Body() data) {
        userdata.forEach(element => {
            if(element.id == data.id && element.password == data.password) {
                console.log(element.id+" login success!")
            }
            else {
                console.log('Cannot find request userdata')
            }
        });
    }
}
