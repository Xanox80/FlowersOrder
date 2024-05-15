import { RepositoryModule } from 'src/repository';
import { DecorationService } from './decoration.service';
import { DecorationController } from './decoration.controller';
import { Module } from '@nestjs/common';

const providers = [DecorationService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [DecorationController],
	providers,
	exports: [...providers],
})
export class DecoratoinModule {}
