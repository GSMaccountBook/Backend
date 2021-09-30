import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Money } from './money.entity';
import { MoneydataService } from './money.service';

@Module({
    imports: [TypeOrmModule.forFeature([Money])],
    providers:[MoneydataService],
    exports: [TypeOrmModule]
  })
export class MoneydataModule {}
