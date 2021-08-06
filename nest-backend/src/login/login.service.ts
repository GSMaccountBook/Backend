import { Injectable } from '@nestjs/common';
import { UserdataService } from 'src/userdata/userdata.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class LoginService {
    constructor(private readonly userdataservice: UserdataService) {}

    async passwordCheck(userid:string, password:string) {
        const userdata = await this.userdataservice.findIdCheck(userid);
        const isMatch = await bcrypt.compare(password,userdata.salt);
        console.log(isMatch)
    }
}
