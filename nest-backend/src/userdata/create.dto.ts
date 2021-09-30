import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({description:'user id'})
    userid: string;
    @ApiProperty({description:'user password'})
    password: string;
    @ApiProperty({description:'user name'})
    username:string;
    @ApiProperty({description:'user email'})
    email:string;
    @ApiProperty({description:'user password salt'})
    salt:string;
  }