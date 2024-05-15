import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class DecorationsDto {
	@Expose()
	id: string;

	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	name: string;

	@ApiProperty()
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	price: number;
}
