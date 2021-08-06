import { Injectable } from '@nestjs/common';
import { UserdataService } from 'src/userdata/userdata.service';
import * as bcrypt from 'bcrypt'

@Injectable()
export class LoginService {
    constructor(private readonly userdataservice: UserdataService) {}

    async passwordCheck(userid:string, password:string) {
        const userdata = await this.userdataservice.findIdCheck(userid);
        const hash = await bcrypt.hash(password, userdata.salt);
        const isMatch = await bcrypt.compare(password,hash);
        return isMatch;
    }
}
