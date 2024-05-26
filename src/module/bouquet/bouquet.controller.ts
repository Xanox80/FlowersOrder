import { BouquetDto, BouquetResponseDto } from 'src/common';
import { BouquetService } from './bouquet.service';
import { Controller, HttpCode, HttpStatus, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('buquet')
@ApiTags('Buquet')
@ApiBearerAuth()
@Controller('buquet')
export class BouquetController {
	constructor(private readonly bouquetService: BouquetService) {}

	@ApiOperation({ description: 'CreateBouquet' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: BouquetResponseDto })
	@Post('/createBouquet')
	async createflower(@Body() data: BouquetDto) {
		return this.bouquetService.createBouquet(data);
	}

	@ApiOperation({ description: 'GetBouquet' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: BouquetResponseDto })
	@Get('/getAllFlowers')
	async getAllFlowers(): Promise<BouquetResponseDto[]> {
		return this.bouquetService.getBouquet();
	}
}
