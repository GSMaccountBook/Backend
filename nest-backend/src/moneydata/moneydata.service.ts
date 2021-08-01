import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Moneydata } from './moneydata.entity';
import { ICreateMoneydata } from './moneydata.interface';

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
    
      findOne(id: string): Promise<Moneydata> {
        return this.moneyRepository.findOne(id);
      }
    
      findIdCheck(userid: string): Promise<Moneydata> {
        return this.moneyRepository.findOne({userid:userid});
      }
    
      async remove(userid: string): Promise<void> {
        await this.moneyRepository.delete({userid:userid});
      }
}

