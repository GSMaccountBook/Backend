import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [LoginService,UserdataService]
})
export class LoginModule {}