import { Module } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports:[TypeOrmModule.forFeature([User]),AuthModule],
  providers: [LoginService,UserdataService],
  controllers:[LoginController]
})
export class LoginModule {}