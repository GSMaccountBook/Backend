import { HttpException,HttpStatus,Post,Body,Controller } from '@nestjs/common';
import { CreateUserDto } from 'src/user/dto/create.dto';
import { UserdataService } from 'src/user/entity/userdata.service';

@Controller('register')
export class RegisterController {
    constructor(private readonly userdataservice: UserdataService) {}

    @Post()
    async findAll(@Body() createUserdataDto: CreateUserDto) {
        const idCheck = await this.userdataservice.findIdCheck(createUserdataDto.userid);
        if(idCheck != undefined) {
            throw new HttpException('duplicated userid',HttpStatus.BAD_REQUEST)
        } else {
            const result = await this.userdataservice.createUserdata(createUserdataDto);
            return "회원가입 성공";
        }
    }
}
