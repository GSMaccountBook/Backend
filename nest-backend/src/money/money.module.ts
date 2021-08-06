import { Module } from '@nestjs/common';
import { MoneyService } from './money.service';
import { MoneyController } from './money.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userdata } from 'src/userdata/userdata.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Userdata])],
  providers: [MoneyService],
  controllers: [MoneyController]
})
export class MoneyModule {}
