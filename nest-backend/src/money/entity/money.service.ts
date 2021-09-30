import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Money } from './money.entity';
import { ICreateMoneydata } from '../dto/moneydata.interface';
import { IUpdateMoneydata } from '../dto/update.interface';

@Injectable()
export class MoneydataService {
    constructor(
        @InjectRepository(Money)
        private moneyRepository: Repository<Money>,
      ) {}
    
      createMoneydata(createMoneyDto:ICreateMoneydata) {
        return this.moneyRepository.save(createMoneyDto);
      }
      getData(): Promise<Money[]> {
        return this.moneyRepository.find();
      }
    
      findIdCheck(userid: string): Promise<Money> {
        return this.moneyRepository.findOne({userid:userid});

      }

      async updateMoneydata(updateMoneyDto:IUpdateMoneydata) {
        const updatedata = await this.moneyRepository.findOne({userid:updateMoneyDto.userid});
        updatedata.money = updateMoneyDto.money;
        updatedata.spend = updateMoneyDto.spend;
        updatedata.income = updateMoneyDto.income;
        await this.moneyRepository.save(updatedata);
      }
    
      async remove(userid: string): Promise<void> {
        await this.moneyRepository.delete({userid:userid});
      }
}

