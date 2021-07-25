import { Connection, Repository } from 'typeorm';
import { Userdata } from './userdata.entity';

export const userdataProviders = [
  {
    provide: 'USERDATA_REPOSITORY',
    useFactory: (connection: Connection) => connection.getRepository(Userdata),
    inject: ['DATABASE_CONNECTION'],
  },
];