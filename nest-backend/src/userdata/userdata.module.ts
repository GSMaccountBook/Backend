import { Module } from '@nestjs/common';
import { UserdataService } from './userdata.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers:[UserdataService],
  exports:[TypeOrmModule]
})
export class UserdataModule {}