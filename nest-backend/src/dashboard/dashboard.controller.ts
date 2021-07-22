import { Controller,Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
    constructor(private readonly dashboardService: DashboardService) {}

    @Get()
    getMoney(): any {
      return this.dashboardService.getMoney();
    }
}
