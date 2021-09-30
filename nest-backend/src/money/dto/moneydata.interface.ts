import { ApiProperty } from "@nestjs/swagger"

export class ICreateMoneydata {
    @ApiProperty({description:'user id'})
    userid:string
    @ApiProperty({description:'보유 돈'})
    money:number
    @ApiProperty({description:"지출"})
    spend:number
    @ApiProperty({description:"수입"})
    income:number
}