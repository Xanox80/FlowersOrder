import { Injectable } from '@nestjs/common';
import { ClientsrequestDto } from 'src/common/dto/Clients/request';
import { ClientsResponseDto } from 'src/common/dto/Clients/response';
import { ClientsRepository } from 'src/repository/repositories/client.repository';

@Injectable()
export class ClientsService {
	constructor(private readonly clientsRepository: ClientsRepository) {}

	async registerAuth(authParams: ClientsrequestDto): Promise<ClientsResponseDto> {
		return this.clientsRepository
			.register(authParams)
			.then(ClientsResponseDto.mapFrom);
	}

	async loginAuth(authParams: ClientsrequestDto): Promise<ClientsResponseDto> {
		return this.clientsRepository.login(authParams).then(ClientsResponseDto.mapFrom);
	}
}
