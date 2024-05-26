import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IsString, IsNumber, IsNotEmpty } from 'class-validator';

export class PollDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 6 })
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	rating: number;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	personal: string;

	@ApiProperty()
	@IsString()
	@Expose()
	quality: string;
}
