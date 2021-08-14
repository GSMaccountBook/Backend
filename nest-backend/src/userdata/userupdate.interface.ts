import { ApiProperty } from "@nestjs/swagger"

export class IUpdateUserdata {
    @ApiProperty({description:'username'})
    username:string;
    email:string;
    userid:string;
}