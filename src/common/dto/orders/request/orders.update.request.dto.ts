import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class OrdersUpdaterequestDto {
	@ApiPropertyOptional()
	@IsString()
	@IsNotEmpty()
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
	@IsString()
	@IsNotEmpty()
	@Expose()
	price: number;

	@ApiProperty()
	@IsString()
	@IsNotEmpty()
	@Expose()
	count: number;
}
