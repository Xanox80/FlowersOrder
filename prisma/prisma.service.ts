import { Injectable, OnModuleInit, INestApplication } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import * as proccess from 'process';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {
	async onModuleInit(): Promise<void> {
		await this.$connect();
	}

	async enableShutdownHooks(app: INestApplication): Promise<void> {
		proccess.on('beforeExit', async () => {
			await app.close();
		});
	}
}
