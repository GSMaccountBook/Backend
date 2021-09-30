import { Module } from '@nestjs/common';
import { MoneyService } from './money.service';
import { MoneyController } from './money.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([User])],
  providers: [MoneyService],
  controllers: [MoneyController]
})
export class MoneyModule {}
