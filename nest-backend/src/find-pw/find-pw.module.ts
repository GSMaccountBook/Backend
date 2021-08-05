import { Module } from '@nestjs/common';
import { UserdataService } from 'userdata/userdata.service';

@Module({})
export class FindPwModule {
    providers:[UserdataService]
}
