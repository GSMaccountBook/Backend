import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { UserdataService } from 'src/user/entity/userdata.service';
import { RegisterController } from './register.controller';
import { RegisterService } from './register.service';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [RegisterService,UserdataService],
  controllers:[RegisterController]
})
export class RegisterModule {}
