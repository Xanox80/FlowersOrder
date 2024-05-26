import { Module } from '@nestjs/common';
import { BouquetService } from './bouquet.service';
import { BouquetController } from './bouquet.controller';
import { RepositoryModule } from 'src/repository';

const providers = [BouquetService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [BouquetController],
	providers,
	exports: [...providers],
})
export class BouquetModule {}
