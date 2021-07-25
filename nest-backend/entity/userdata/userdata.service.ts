import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Userdata } from './userdata.entity';

@Injectable()
export class UserdataService {
  constructor(
    @Inject('Userdata_REPOSITORY')
    private userdataRepository: Repository<Userdata>,
  ) {}

  async findAll(): Promise<Userdata[]> {
    return this.userdataRepository.find();
  }
}