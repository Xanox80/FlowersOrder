import { Injectable } from '@nestjs/common';
import { PollRequest } from 'src/common/dto/Poll/request';
import { PollRepository } from 'src/repository';

@Injectable()
export class PollService {
	constructor(private readonly pollRepository: PollRepository) {}

	async createPoll(data: PollRequest) {
		return this.pollRepository.createPoll(data);
	}
}
