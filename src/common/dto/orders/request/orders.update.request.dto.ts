import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class OrdersUpdaterequestDto {
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
	@IsString()
	@IsNotEmpty()
	@Expose()
	price: string;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Expose()
	day: string;

	@ApiProperty({ example: '12 : 00' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	time: string;
}
