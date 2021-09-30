import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from '../dto/create.dto';
import * as bcrypt from 'bcrypt'
import { UpdateDto } from '../dto/update.dto';

@Injectable()
export class UserdataService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUserdata(createUserDto: CreateUserDto) {
    createUserDto.salt = await bcrypt.genSalt();
    createUserDto.password = await bcrypt.hash(createUserDto.password,createUserDto.salt);
    return this.usersRepository.save(createUserDto);
  }
  getData(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  findIdCheck(userid: string): Promise<User> {
    return this.usersRepository.findOne({userid:userid});
  }

  async updateUserdata(updateUserdataDto:UpdateDto) {
    const updatedata = await this.usersRepository.findOne({userid:updateUserdataDto.userid});
    updatedata.username = updateUserdataDto.username;
    updatedata.email = updateUserdataDto.email;
    await this.usersRepository.save(updatedata);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}