import { ApiProperty } from '@nestjs/swagger';
import { Poll } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class PollResponseDto {
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

	@ApiProperty({ example: 'Text' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	quality: string;

	public static mapFrom(data: Poll): PollResponseDto {
		return plainToClass(PollResponseDto, data, { excludeExtraneousValues: true });
	}

	public static mapFromMulti(data: Poll[]): PollResponseDto[] {
		return data.map(PollResponseDto.mapFrom);
	}
}
