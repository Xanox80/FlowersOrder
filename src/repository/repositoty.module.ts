import { Module } from '@nestjs/common';
import { Global } from '@nestjs/common/decorators/modules/global.decorator';
import { FlowerRepository, PhotoRepository } from './repositories';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'prisma/prisma.service';
import { OrdersRepository } from './repositories/order.repository';
import { ClientsRepository } from './repositories/client.repository';

const providers = [
	ConfigService,
	FlowerRepository,
	PrismaService,
	PhotoRepository,
	OrdersRepository,
	ClientsRepository,
];

@Global()
@Module({
	imports: [],
	controllers: [],
	providers,
	exports: [...providers],
})
export class RepositoryModule {}
