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
import { Userdata } from 'src/userdata/userdata.entity';
import { UserdataService } from 'src/userdata/userdata.service';  
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { RegisterController } from './register/register.controller';
import { MoneydataService } from './moneydata/moneydata.service';
import { MoneydataModule } from './moneydata/moneydata.module';
import { Moneydata } from './moneydata/moneydata.entity';
import { MoneyController } from './money/money.controller';
import { FindPwController } from './find-pw/find-pw.controller';
import { LoginService } from './login/login.service';
import { FindPwModule } from './find-pw/find-pw.module';
import { AuthService } from './auth/auth.service';
import { MypageController } from './mypage/mypage.controller';
import { MypageModule } from './mypage/mypage.module';
import { TestModule } from './test/test.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [Userdata,Moneydata],
      synchronize: true,
    }), 
    DashboardModule, LoginModule, UserdataModule, RegisterModule, AuthModule, MoneydataModule, FindPwModule, MypageModule, TestModule],
  controllers: [AppController, DashboardController, LoginController,RegisterController,MoneyController, FindPwController, MypageController],
  providers: [AppService, DashboardService, MoneydataService,UserdataService,LoginService],
})
export class AppModule {}
