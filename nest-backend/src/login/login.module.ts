import { Module } from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { UserdataService } from 'userdata/userdata.service';
import { LoginService } from './login.service';

@Module({
  providers: [UserdataService,AuthService]
})
export class LoginModule {}

