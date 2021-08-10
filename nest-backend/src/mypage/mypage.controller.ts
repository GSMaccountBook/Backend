import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { Userdata } from 'src/userdata/userdata.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import jwt_decode from "jwt-decode";
import { IUpdateUserdata } from 'src/userdata/userupdate.interface';

@Controller('mypage')
export class MypageController {
    constructor(private readonly userdataservice:UserdataService) {}

    @Get()
    async get_userdata(@Headers("accessToken") accessToken) {
        let decode:any = jwt_decode(accessToken);
        let result = await this.userdataservice.findIdCheck(decode.userid);
        return result;
    }

    @Post()
    async modify_userdta(@Body() updateuserdata:IUpdateUserdata, @Headers("accessToken") accessToken) {
        let decode:any = jwt_decode(accessToken);
        updateuserdata.userid = decode.userid;
        try {
            let update = await this.userdataservice.updateUserdata(updateuserdata);
            return "수정되었습니다."
        } catch (error) {
            console.log(error)
            return "다시 시도해주세요"
        }
        
    }
}
