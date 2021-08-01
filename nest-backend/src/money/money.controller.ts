import { Controller, Post,Body, Get } from '@nestjs/common';
import { ICreateMoneydata } from 'src/moneydata/moneydata.interface';
import { MoneydataService } from 'src/moneydata/moneydata.service';

@Controller('money')
export class MoneyController {
    constructor(private readonly moneydataservice: MoneydataService) {}

    @Post()
    async findAll(@Body() createmoneyDto:ICreateMoneydata) {
        const money_result = await this.moneydataservice.createMoneydata(createmoneyDto);
        console.log(money_result)
        return "변경되었습니다."
    }
    @Get()
    async getData() {
        this.moneydataservice.getData()
    }
}
