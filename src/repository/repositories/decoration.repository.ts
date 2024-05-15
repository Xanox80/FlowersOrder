import { BadRequestException, Injectable } from '@nestjs/common';
import { Decorations } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DecorationsDto } from 'src/common/dto/Decorations';

@Injectable()
export class DecorationRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createDecoration(data: DecorationsDto): Promise<any> {
		return await this.prisma.decorations.create({
			data,
		});
	}

	async getDecorations(): Promise<Decorations[]> {
		try {
			return await this.prisma.decorations.findMany();
		} catch (error) {
			throw new BadRequestException(error);
		}
	}
}
