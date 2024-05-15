import { Body, Controller, Get, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { DecorationService } from './decoration.service';
import { DecorationsDto, DecrationsResponseDto } from 'src/common/dto/Decorations';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('Decoration')
@ApiTags('Decoration')
@ApiBearerAuth()
@Controller('Decoration')
export class DecorationController {
	constructor(private readonly data: DecorationService) {}

	@ApiOperation({ description: 'createDecoration' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: DecrationsResponseDto })
	@Post('/createDecoration')
	async createdecoration(@Body() data: DecorationsDto) {
		return this.data.createDecoration(data);
	}

	@ApiOperation({ description: 'getDecorations' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: DecrationsResponseDto })
	@Get('/getDecorations')
	async getAllFlowers(): Promise<DecrationsResponseDto[]> {
		return this.data.getDecoration();
	}
}
