import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Moneydata } from './moneydata.entity';
import { MoneydataService } from './moneydata.service';

@Module({
    imports: [TypeOrmModule.forFeature([Moneydata])],
    providers:[MoneydataService],
    exports: [TypeOrmModule]
  })
export class MoneydataModule {}
