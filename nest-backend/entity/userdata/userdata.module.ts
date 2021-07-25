import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { userdataProviders } from './userdata.providers';
import { UserdataService } from './userdata.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...userdataProviders,
    UserdataService,
  ],
})
export class UserdataModule {}