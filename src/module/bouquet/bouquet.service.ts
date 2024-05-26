import { Injectable } from '@nestjs/common';
import { BouquetRequest, BouquetResponseDto } from 'src/common';
import { BouquetRepository } from 'src/repository';

@Injectable()
export class BouquetService {
	constructor(private readonly bouquetRepository: BouquetRepository) {}

	async createBouquet(data: BouquetRequest) {
		return this.bouquetRepository.createBouquet(data);
	}

	async getBouquet(): Promise<BouquetResponseDto[]> {
		return await this.bouquetRepository
			.getBouquet()
			.then(BouquetResponseDto.mapFromMulti);
	}
}
