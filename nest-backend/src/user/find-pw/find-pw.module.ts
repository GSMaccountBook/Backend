import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';
import { UserdataService } from 'src/user/entity/userdata.service';
import { FindPwController } from './find-pw.controller';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserdataService],
    controllers:[FindPwController]
})
export class FindPwModule {}
