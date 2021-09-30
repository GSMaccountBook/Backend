import { ApiProperty } from "@nestjs/swagger";

export class IUpdateMoneydata {
    @ApiProperty({description:'유저 id'})
    userid:string;
    money:number;
    spend:number;
    income:number;
}