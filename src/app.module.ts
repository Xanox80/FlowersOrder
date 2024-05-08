import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { PrismaModule } from 'prisma/prisma.module';
import { PrismaService } from 'prisma/prisma.service';
import { FlowerModule } from './module/flowers/flower.module';
import { PhotoModule } from './module/photos/photo.module';
import { OrdersModule } from './module/orders/orders.module';
import { ClientModule } from './module/clients/client.module';

@Module({
	imports: [
		ConfigModule.forRoot(),
		PrismaModule,
		FlowerModule,
		PhotoModule,
		OrdersModule,
		ClientModule,
	],
	controllers: [],
	providers: [ConfigService, PrismaService],
	exports: [ConfigService],
})
export class AppModule {}
