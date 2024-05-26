import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { PollDto, PollRequest } from 'src/common';

@Injectable()
export class PollRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createPoll(data: PollDto): Promise<any> {
		return await this.prisma.poll.create({
			data,
		});
	}
}
