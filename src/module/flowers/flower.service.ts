import { Injectable } from '@nestjs/common';
import { FloweResponseDto, FlowerRequest, FlowerUpdaterequestDto } from 'src/common';
import { FlowerRepository } from 'src/repository';

@Injectable()
export class FlowerService {
	constructor(private readonly FlowerRepository: FlowerRepository) {}

	async createflower(flowerParams: FlowerRequest) {
		return this.FlowerRepository.createflower(flowerParams);
	}

	async getFlowers(): Promise<FloweResponseDto[]> {
		return await this.FlowerRepository.getFlowers().then(
			FloweResponseDto.mapFromMulti
		);
	}

	async deleteFlower(id: string) {
		return await this.FlowerRepository.deleteFlower(id);
	}

	async updateFlower(data: FlowerUpdaterequestDto) {
		return await this.FlowerRepository.updateFlower(data);
	}
}
