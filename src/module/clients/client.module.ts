import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository';
import { ClientsService } from './client.service';
import { ClientsController } from './clients.controller';

const providers = [ClientsService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [ClientsController],
	providers,
	exports: [...providers],
})
export class ClientModule {}
