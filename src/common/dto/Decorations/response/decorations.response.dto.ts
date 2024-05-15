import { ApiProperty } from '@nestjs/swagger';
import { Decorations } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class DecrationsResponseDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	name: string;

	@ApiProperty({ example: '123' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	price: number;

	public static mapFrom(data: Decorations): DecrationsResponseDto {
		return plainToClass(DecrationsResponseDto, data, {
			excludeExtraneousValues: true,
		});
	}

	public static mapFromMulti(data: Decorations[]): DecrationsResponseDto[] {
		return data.map(DecrationsResponseDto.mapFrom);
	}
}
