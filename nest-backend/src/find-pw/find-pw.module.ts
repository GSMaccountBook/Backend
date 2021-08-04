import { Module } from '@nestjs/common';
import { FindPwService } from './find-pw.service';

@Module({})
export class FindPwModule {
    providers:[FindPwService]
}
