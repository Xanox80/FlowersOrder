import { RepositoryModule } from 'src/repository';
import { OrdersService } from './orders.service';
import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';

const providers = [OrdersService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [OrdersController],
	providers,
	exports: [...providers],
})
export class OrdersModule {}
