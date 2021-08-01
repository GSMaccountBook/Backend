import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { UserdataModule } from 'userdata/userdata.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userdata } from 'userdata/userdata.entity';
import { UserdataService } from 'userdata/userdata.service';
import { RegisterModule } from './register/register.module';
import { AuthModule } from './auth/auth.module';
import { RegisterController } from './register/register.controller';
import { MoneydataService } from './moneydata/moneydata.service';
import { MoneydataModule } from './moneydata/moneydata.module';
import { Moneydata } from './moneydata/moneydata.entity';
import { MoneyController } from './money/money.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0112',
      database: 'test',
      entities: [Userdata,Moneydata],
      synchronize: true,
    }),
    DashboardModule, LoginModule, UserdataModule, RegisterModule, AuthModule, MoneydataModule],
  controllers: [AppController, DashboardController, LoginController,RegisterController,MoneyController],
  providers: [AppService, DashboardService,UserdataService, MoneydataService],
})
export class AppModule {}
