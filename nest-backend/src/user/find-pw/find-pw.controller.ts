import { Body, Get, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserdataService } from 'src/user/entity/userdata.service';
import * as bcrypt from 'bcrypt'

@Controller('find-pw')
export class FindPwController {
    constructor(private readonly userdataservice:UserdataService) {}

    @Post()
    async asdf(@Body() getdata) {
        let userdata = await this.userdataservice.findIdCheck(getdata.userid);
        console.log(userdata)
        if(userdata == undefined) {
            return "잘못된 ID입니다";
        } else {
            if(getdata.email = userdata.email) {
                let password = await bcrypt.hash(userdata.password,userdata.salt);
                return "사용자의 비밀번호는 "+password
            } else {
                return "일치하지 않은 이메일입니다."
            }
        }
    }

    @Get()
    async asdfqwer() {
        return this.userdataservice.findIdCheck("ingyo12345");
    }
}
