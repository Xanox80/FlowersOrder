import { Injectable } from '@nestjs/common';
import { DecorationsRequest, DecrationsResponseDto } from 'src/common/dto/Decorations';
import { DecorationRepository, FlowerRepository } from 'src/repository';

@Injectable()
export class DecorationService {
	constructor(private readonly data: DecorationRepository) {}

	async createDecoration(decorationParams: DecorationsRequest) {
		return this.data.createDecoration(decorationParams);
	}

	async getDecoration(): Promise<DecrationsResponseDto[]> {
		return await this.data.getDecorations().then(DecrationsResponseDto.mapFromMulti);
	}
}
