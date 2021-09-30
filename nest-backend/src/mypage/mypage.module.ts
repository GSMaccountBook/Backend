import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';
import { MypageController } from './mypage.controller';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserdataService],
    controllers:[MypageController]
})
export class MypageModule {}
