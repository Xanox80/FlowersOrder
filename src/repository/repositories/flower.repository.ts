import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FloweResponseDto, FlowerDto, FlowerUpdaterequestDto } from 'src/common';
import { PrismaService } from 'prisma/prisma.service';
import { Flowers } from '@prisma/client';

@Injectable()
export class FlowerRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createflower(data: FlowerDto): Promise<any> {
		return await this.prisma.flowers.create({
			data,
		});
	}

	async getFlowers(): Promise<Flowers[]> {
		try {
			return await this.prisma.flowers.findMany();
		} catch (error) {
			throw new BadRequestException(error);
		}
	}

	// async getFlower(id: string): Promise<Flowers> {
	// 	try {
	// 		return await this.prisma.flowers.findFirst({
	// 			where: {
	// 				id: id,
	// 			},
	// 		});
	// 	} catch (error) {
	// 		throw new BadRequestException(error);
	// 	}
	// }
	async deleteFlower(id: string): Promise<FloweResponseDto> {
		const flowerToDelete = await this.prisma.flowers.findUnique({
			where: {
				id: id,
			},
		});

		if (!flowerToDelete) {
			throw new Error('Flower not found');
		}

		const deletedFlower = await this.prisma.flowers.delete({
			where: {
				id: id,
			},
		});

		return deletedFlower;
	}

	async updateFlower(data: FlowerUpdaterequestDto): Promise<Flowers> {
		try {
			const { id, kind, price } = data;

			const updatedFlower = await this.prisma.flowers.update({
				where: {
					id: id,
				},
				data: {
					kind: kind !== undefined ? kind : undefined,
					price: price !== undefined ? price : undefined,
				},
			});

			if (!updatedFlower) {
				throw new NotFoundException('Flower not found');
			}

			return updatedFlower;
		} catch (error) {
			throw new NotFoundException('An error occurred while updating');
		}
	}
}
