import {
	Post,
	HttpCode,
	HttpStatus,
	Body,
	Controller,
	Get,
	Delete,
	Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { FloweResponseDto, FlowerDto } from 'src/common';
import { FlowerService } from './flower.service';

@Controller('flower')
@ApiTags('Flower')
@ApiBearerAuth()
@Controller('flower')
export class FlowerController {
	constructor(private readonly flowerService: FlowerService) {}

	@ApiOperation({ description: 'CreateFlower' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: FloweResponseDto })
	@Post('/createFlower')
	async createflower(@Body() data: FlowerDto) {
		return this.flowerService.createflower(data);
	}

	@ApiOperation({ description: 'GetFlowers' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: FloweResponseDto })
	@Get('/getAllFlowers')
	async getAllFlowers(): Promise<FloweResponseDto[]> {
		return this.flowerService.getFlowers();
	}

	@ApiOperation({ description: 'DeleteFlower' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	@Delete('/deleteFlower/:id')
	async deleteFlower(@Param('id') id: string) {
		this.flowerService.deleteFlower(id);
	}

	@ApiOperation({ description: 'UpdateFlower' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	@Post('/update/:id')
	async updateFlowers(@Param('id') id: string, @Body() data: FlowerDto) {
		data.id = id;
		return this.flowerService.updateFlower(data);
	}
}
