import { ApiProperty } from '@nestjs/swagger';
import { Clients } from '@prisma/client';
import { Expose, plainToClass } from 'class-transformer';
import { IsNotEmpty, IsString } from 'class-validator';

export class ClientsResponseDto {
	@ApiProperty()
	@Expose()
	id: string;

	@ApiProperty({ example: 'AWFa' })
	@IsString()
	@IsNotEmpty()
	name: string;

	@ApiProperty({ example: 'AWFa' })
	@IsString()
	@IsNotEmpty()
	password: string;

	public static mapFrom(data: Clients): ClientsResponseDto {
		return plainToClass(ClientsResponseDto, data, { excludeExtraneousValues: true });
	}

	public static mapFromMulti(data: Clients[]): ClientsResponseDto[] {
		return data.map(ClientsResponseDto.mapFrom);
	}
}
