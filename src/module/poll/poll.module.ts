import { Module } from '@nestjs/common';
import { RepositoryModule } from 'src/repository';
import { PollService } from './poll.service';
import { PollController } from './poll.controller';

const providers = [PollService];
const modules = [RepositoryModule];

@Module({
	imports: [...modules],
	controllers: [PollController],
	providers,
	exports: [...providers],
})
export class PollModule {}
