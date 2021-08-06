import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Userdata } from 'src/userdata/userdata.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([Userdata])],
  providers: [UserdataService,AuthService]
})
export class LoginModule {}

