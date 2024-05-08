import { Module } from '@nestjs/common';
import { FlowerService } from './flower.service';
import { RepositoryModule } from 'src/repository';
import { FlowerController } from './flower.controller';

const providers = [FlowerService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [FlowerController],
	providers,
	exports: [...providers],
})
export class FlowerModule {}
