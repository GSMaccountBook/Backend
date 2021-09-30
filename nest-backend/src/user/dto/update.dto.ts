import { ApiProperty } from "@nestjs/swagger"

export class UpdateDto {
    @ApiProperty({description:'username'})
    username:string;
    @ApiProperty({description:'user email'})
    email:string;
    @ApiProperty({description:'user id'})
    userid:string;
}