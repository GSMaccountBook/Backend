import { Module } from '@nestjs/common';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginModule } from './login/login.module';
import { UserdataModule } from 'src/userdata/userdata.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/userdata/user.entity';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { MoneydataModule } from './money/entity/money.module';
import { Money } from './money/entity/money.entity';
import { FindPwModule } from './find-pw/find-pw.module';
import { MypageModule } from './mypage/mypage.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [User,Money],
      synchronize: true,
    }), 
    DashboardModule, LoginModule, UserdataModule, RegisterModule, AuthModule, MoneydataModule, FindPwModule, MypageModule]
})
export class AppModule {}
