import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { Userdata } from 'src/userdata/userdata.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([Userdata])],
  providers: [LoginService,UserdataService]
})
export class LoginModule {}