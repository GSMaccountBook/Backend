import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { UserdataModule } from 'src/userdata/userdata.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/userdata/user.entity';
import { UserdataService } from 'src/userdata/userdata.service';  
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { RegisterController } from './register/register.controller';
import { MoneydataService } from './money/entity/money.service';
import { MoneydataModule } from './money/entity/money.module';
import { Money } from './money/entity/money.entity';
import { MoneyController } from './money/money.controller';
import { FindPwController } from './find-pw/find-pw.controller';
import { LoginService } from './login/login.service';
import { FindPwModule } from './find-pw/find-pw.module';
import { MypageController } from './mypage/mypage.controller';
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
