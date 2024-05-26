import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateABouquet } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { BouquetDto } from 'src/common';

@Injectable()
export class BouquetRepository {
	constructor(private readonly prisma: PrismaService) {}
	async createBouquet(data: BouquetDto): Promise<CreateABouquet> {
		// const bouquet = await this.prisma.createABouquet.findFirst({
		// })
		return await this.prisma.createABouquet.create({
			data,
		});
	}

	async getBouquet(): Promise<CreateABouquet[]> {
		try {
			return await this.prisma.createABouquet.findMany();
		} catch (error) {
			throw new BadRequestException(error);
		}
	}
}
