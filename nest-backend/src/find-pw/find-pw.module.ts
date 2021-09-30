import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';

@Module({
    imports:[TypeOrmModule.forFeature([User])],
    providers:[UserdataService]
})
export class FindPwModule {}
