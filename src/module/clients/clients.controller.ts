import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { ClientsResponseDto } from 'src/common/dto/Clients/response';
import { ClientsService } from './client.service';
import { ClientsrequestDto } from 'src/common/dto/Clients/request';

@Controller('clients')
@ApiTags('Clients')
@ApiBearerAuth()
@Controller('Clients')
export class ClientsController {
	constructor(private readonly clientsService: ClientsService) {}

	@Post('register')
	@ApiOperation({ description: 'login' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: ClientsResponseDto })
	@Post('register')
	async registerAuth(
		@Body() authParams: ClientsResponseDto
	): Promise<ClientsResponseDto> {
		return this.clientsService.registerAuth(authParams);
	}

	@Post('login')
	@ApiOperation({ description: 'loginAuth' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: ClientsResponseDto })
	async loginAuth(@Body() authParams: ClientsrequestDto): Promise<ClientsResponseDto> {
		return this.clientsService.loginAuth(authParams);
	}
}
