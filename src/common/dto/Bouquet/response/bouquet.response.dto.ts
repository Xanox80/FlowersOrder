import { ApiProperty } from '@nestjs/swagger';
import { CreateABouquet } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class BouquetResponseDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	create: string;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	care: string;

	public static mapFrom(data: CreateABouquet): BouquetResponseDto {
		return plainToClass(BouquetResponseDto, data, { excludeExtraneousValues: true });
	}

	public static mapFromMulti(data: CreateABouquet[]): BouquetResponseDto[] {
		return data.map(BouquetResponseDto.mapFrom);
	}
}
