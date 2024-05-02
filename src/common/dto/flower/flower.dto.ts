import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class FlowerDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	kind: string;

	@ApiProperty({ example: 73453 })
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	price: number;

	@ApiProperty({ example: 73453 })
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	number: number;
}
