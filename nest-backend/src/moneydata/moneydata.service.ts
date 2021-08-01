import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MoneyData } from './moneydata.entity';
import { ICreateMoneydata } from './moneydata.interface';

@Injectable()
export class MoneydataService {
    constructor(
        @InjectRepository(MoneyData)
        private moneyRepository: Repository<MoneyData>,
      ) {}
    
      createMoneydata(createMoneydata:ICreateMoneydata) {
        return this.moneyRepository.save(createMoneydata);
      }
      getData(): Promise<MoneyData[]> {
        return this.moneyRepository.find();
      }
    
      findOne(id: string): Promise<MoneyData> {
        return this.moneyRepository.findOne(id);
      }
    
      findIdCheck(userid: string): Promise<MoneyData> {
        return this.moneyRepository.findOne({userid:userid});
      }
    
      async remove(userid: string): Promise<void> {
        await this.moneyRepository.delete({userid:userid});
      }
}

