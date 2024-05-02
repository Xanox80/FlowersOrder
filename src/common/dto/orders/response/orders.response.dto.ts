import { ApiProperty } from '@nestjs/swagger';
import { Flowers } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class OrdersResponseDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	kind: string;

	@ApiProperty({ example: 12 })
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	numbers: number;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	price: number;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Expose()
	count: number;

	public static mapFrom(data: Flowers): OrdersResponseDto {
		return plainToClass(OrdersResponseDto, data, { excludeExtraneousValues: true });
	}

	public static mapFromMulti(data: Flowers[]): OrdersResponseDto[] {
		return data.map(OrdersResponseDto.mapFrom);
	}
}
