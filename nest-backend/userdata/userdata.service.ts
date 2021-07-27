import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userdata } from './userdata.entity';

@Injectable()
export class UserdataService {
  constructor(
    @InjectRepository(Userdata)
    private usersRepository: Repository<Userdata>,
  ) {}

  getData(): Promise<Userdata[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Userdata> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}