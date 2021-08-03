import { Controller, Post,Body, Get, Headers } from '@nestjs/common';
import jwtDecode from 'jwt-decode';
import { ICreateMoneydata } from 'src/moneydata/moneydata.interface';
import { MoneydataService } from 'src/moneydata/moneydata.service';

@Controller('money')
export class MoneyController {
    constructor(private readonly moneydataservice: MoneydataService) {}

    @Post()
    async asdf(@Body() update:ICreateMoneydata, @Headers() access) {
        console.log(update);
        
    }

    @Post('create')
    async findAll(@Body() createmoneyDto:ICreateMoneydata) {
        const money_result = await this.moneydataservice.createMoneydata(createmoneyDto);
        console.log(money_result)
        return "변경되었습니다."
    }

    @Get()
    async getData() {
        let data = await this.moneydataservice.getData()
        return data;
    }
}
