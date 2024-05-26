import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class OrdersDto {
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
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	count: number;

	@ApiProperty({ example: 'Thuesday' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	day: string;

	@ApiProperty({ example: '14 : 00' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	time: string;
}
