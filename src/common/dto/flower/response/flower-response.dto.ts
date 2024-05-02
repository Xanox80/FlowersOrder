import { ApiProperty } from '@nestjs/swagger';
import { Flowers } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsString, IsNotEmpty } from 'class-validator';

export class FloweResponseDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'Bogdan' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	kind: string;

	@ApiProperty({ example: 'Serventnik' })
	@IsString()
	@IsNotEmpty()
	@Expose()
	price: number;

	@ApiProperty({ example: 73453 })
	@IsString()
	@IsNotEmpty()
	@Expose()
	number: number;

	// success: boolean;
	// message: string;

	public static mapFrom(data: Flowers): FloweResponseDto {
		return plainToClass(FloweResponseDto, data, { excludeExtraneousValues: true });
	}

	public static mapFromMulti(data: Flowers[]): FloweResponseDto[] {
		return data.map(FloweResponseDto.mapFrom);
	}
}
