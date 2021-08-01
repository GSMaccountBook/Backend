import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoneyData } from './moneydata.entity';
import { MoneydataService } from './moneydata.service';

@Module({
    imports: [TypeOrmModule.forFeature([MoneyData])],
    providers:[MoneydataService],
    exports: [TypeOrmModule]
  })
export class MoneydataModule {}
