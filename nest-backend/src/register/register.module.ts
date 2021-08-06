import { Module } from '@nestjs/common';
import { UserdataService } from 'src/userdata/userdata.service';
import { RegisterService } from './register.service';

@Module({
  providers: [RegisterService],
})
export class RegisterModule {}
