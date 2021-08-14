import { Patch } from '@nestjs/common';
import { Controller, Post,Body, Get, Headers } from '@nestjs/common';
import { ApiBody, ApiCreatedResponse, ApiOperation, ApiParam, ApiProperty, ApiTags } from '@nestjs/swagger';
import jwtDecode from 'jwt-decode';
import { Moneydata } from 'src/moneydata/moneydata.entity';
import { ICreateMoneydata } from 'src/moneydata/moneydata.interface';
import { MoneydataService } from 'src/moneydata/moneydata.service';
import { IUpdateMoneydata } from 'src/moneydata/update.interface';

@Controller('money')
@ApiTags('자산 확인 컨트롤러')
export class MoneyController {
    constructor(private readonly moneydataservice: MoneydataService) {}

    @Post('create')
    @ApiOperation({ summary: '자산 생성 API', description: '자산을 생성' })
    @ApiCreatedResponse({ description: '자산 정보를 생성한다.' })
    async findAll(@Body() createmoneyDto:ICreateMoneydata) {
        const money_result = await this.moneydataservice.createMoneydata(createmoneyDto);
        console.log(money_result)
        return "변경되었습니다."
    }

    @Post('update')
    @ApiOperation({ summary: '자산 수정 API', description: '기존 자산을 수정' })
    @ApiCreatedResponse({ description: '자산 정보를 수정한다.' })
    async update(@Body() updatemoneyDto:IUpdateMoneydata) {
        const updatemoney = await this.moneydataservice.updateMoneydata(updatemoneyDto);
        return "변경되었습니다."
    }

    @Get()
    @ApiOperation({ summary: '자산 확인 API', description: '기존 자산을 확인' })
    @ApiCreatedResponse({ description: '자산 정보를 확인한다.'})
    async getData() {
        let data = await this.moneydataservice.getData()
        return data;
    }
/*
    @Patch()
    async update(@Body() updateMoneydataDto:IUpdateMoneydata) {
        return this.moneydataservice.update()
    }*/
}
