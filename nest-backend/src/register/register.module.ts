import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [RegisterService,UserdataService],
  controllers:[RegisterController]
})
export class RegisterModule {}
