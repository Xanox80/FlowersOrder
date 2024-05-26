import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class BouquetDto {
	@Expose()
	id: string;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	create: string;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	care: string;
}
