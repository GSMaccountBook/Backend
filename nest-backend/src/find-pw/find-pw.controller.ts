import { Body, Post } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { UserdataService } from 'src/userdata/userdata.service';

@Controller('find-pw')
export class FindPwController {
    constructor(private readonly userdataservice:UserdataService) {}

    @Post()
    async asdf(@Body() userid:string,email:string) {
        let userdata = await this.userdataservice.findIdCheck(userid);
        if(userdata == undefined) {
            return "잘못된 ID입니다";
        } else {
            if(email = userdata.email) {
                return "사용자의 비밀번호는 "+userdata.password
            } else {
                return "일치하지 않은 이메일입니다."
            }
        }
    }
}
