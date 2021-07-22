import { Injectable } from '@nestjs/common';

@Injectable()
export class DashboardService {
    getMoney():any {
        let data = {
          money:50000,
          spend:12000,
          TodaySpend:1100
        }
        return data;
      }
}
