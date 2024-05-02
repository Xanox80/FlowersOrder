import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class FlowerUpdaterequestDto {
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

	@ApiProperty({ example: 3495 })
	@IsString()
	@IsNotEmpty()
	@Expose()
	price: number;

	@ApiProperty({ example: 73453 })
	@IsString()
	@IsNotEmpty()
	@Expose()
	number: number;
}
