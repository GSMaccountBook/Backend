import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Userdata } from './userdata.entity';
import { ICreateUserdata } from './userdata.interface';

@Injectable()
export class UserdataService {
  constructor(
    @InjectRepository(Userdata)
    private usersRepository: Repository<Userdata>,
  ) {}

  createUserdata(createUserDto: ICreateUserdata) {
    return this.usersRepository.save(createUserDto);
  }
  getData(): Promise<Userdata[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Userdata> {
    return this.usersRepository.findOne(id);
  }

  findIdCheck(userid: string): Promise<Userdata> {
    return this.usersRepository.findOne({userid:userid});
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}