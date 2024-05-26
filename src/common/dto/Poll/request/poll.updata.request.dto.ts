import { ApiProperty } from '@nestjs/swagger';
import { Poll } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PollUpdateDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 9 })
	@IsNumber()
	@IsNotEmpty()
	@Expose()
	rating: number;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	personal: string;

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	quality: string;
}
