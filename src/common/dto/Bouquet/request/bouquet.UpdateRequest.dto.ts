import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class BouquetUpdaterequestDto {
	@ApiPropertyOptional()
	@IsString()
	@IsNotEmpty()
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
