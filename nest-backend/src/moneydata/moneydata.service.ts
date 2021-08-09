import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Moneydata } from './moneydata.entity';
import { ICreateMoneydata } from './moneydata.interface';
import { IUpdateMoneydata } from './update.interface';

@Injectable()
export class MoneydataService {
    constructor(
        @InjectRepository(Moneydata)
        private moneyRepository: Repository<Moneydata>,
      ) {}
    
      createMoneydata(createMoneyDto:ICreateMoneydata) {
        return this.moneyRepository.save(createMoneyDto);
      }
      getData(): Promise<Moneydata[]> {
        return this.moneyRepository.find();
      }
    
      findIdCheck(userid: string): Promise<Moneydata> {
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

