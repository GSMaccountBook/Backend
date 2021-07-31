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

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '0112',
      database: 'test',
      entities: [Userdata],
      synchronize: true,
    }),
    DashboardModule, LoginModule, UserdataModule, RegisterModule, AuthModule],
  controllers: [AppController, DashboardController, LoginController,RegisterController],
  providers: [AppService, DashboardService,UserdataService],
})
export class AppModule {}
