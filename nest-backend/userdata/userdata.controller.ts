import { Controller, Get, Post } from '@nestjs/common';
import { UserdataService } from './userdata.service';

@Controller()
export class UserdataController {
  constructor(private readonly userdata: UserdataService) {}
}
