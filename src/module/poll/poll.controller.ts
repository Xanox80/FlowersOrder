import { Controller } from '@nestjs/common';
import { PollService } from './poll.service';
import { PollDto, PollResponseDto } from 'src/common';
import { HttpCode, HttpStatus, Post, Body, Get } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('poll')
@ApiTags('Poll')
@ApiBearerAuth()
@Controller('poll')
export class PollController {
	constructor(private readonly pollService: PollService) {}

	@ApiOperation({ description: 'CreateBouquet' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: PollResponseDto })
	@Post('/createPoll')
	async createPoll(@Body() data: PollDto) {
		return this.pollService.createPoll(data);
	}
}
