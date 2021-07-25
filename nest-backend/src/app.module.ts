import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DashboardController } from './dashboard/dashboard.controller';
import { DashboardService } from './dashboard/dashboard.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { LoginController } from './login/login.controller';
import { LoginModule } from './login/login.module';
import { UserdataModule } from 'entity/userdata/userdata.module';

@Module({
  imports: [DashboardModule, LoginModule, UserdataModule],
  controllers: [AppController, DashboardController, LoginController],
  providers: [AppService, DashboardService],
})
export class AppModule {}
