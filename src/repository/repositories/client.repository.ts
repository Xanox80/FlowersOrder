import {
	BadRequestException,
	Injectable,
	NotFoundException,
	UnauthorizedException,
} from '@nestjs/common';
import { ClientsDto } from 'src/common';
import { PrismaService } from 'prisma/prisma.service';
import { Clients, Prisma } from '@prisma/client';

import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { ApiJwtPayload } from 'src/interface';
import { getAuthSecret } from 'src/config';
import { ClientsrequestDto } from 'src/common/dto/Clients/request';

const { atSecret, atSecretExpires, rtSecret, rtSecretExpires } = getAuthSecret();

@Injectable()
export class ClientsRepository {
	constructor(private readonly prisma: PrismaService) {}

	async register(data: ClientsDto): Promise<Clients> {
		const { name, password } = data;

		const check = await this.prisma.clients.findFirst({
			where: {
				name: { equals: name },
			},
		});

		if (check) {
			throw new BadRequestException('User already registered!');
		}

		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await this.prisma.clients.create({
			data: {
				name,
				password: hashedPassword,
			},
		});

		const tokenPair = await this.generateTokenPair({
			id: user.id,
			name: user.name,
		});

		await this.prisma.clients.update({
			where: {
				id: user.id,
			},
			data: {
				access_token: tokenPair.access_token,
				refresh_token: tokenPair.refresh_token,
			},
		});

		return { ...user, ...tokenPair };
	}

	async generateTokenPair(
		payload: ApiJwtPayload
	): Promise<{ access_token: string; refresh_token: string }> {
		const access_token = jwt.sign(payload, atSecret, {
			expiresIn: atSecretExpires,
		});
		const refresh_token = jwt.sign(payload, rtSecret, {
			expiresIn: rtSecretExpires,
		});

		return { access_token, refresh_token };
	}

	async login(userParams: ClientsrequestDto): Promise<Clients> {
		const { name, password } = userParams;

		const user = await this.prisma.clients.findFirst({
			where: {
				name: { equals: name },
			},
		});

		if (!user) {
			throw new NotFoundException('User not found!');
		}

		const match = await bcrypt.compare(password, user.password);

		if (match) {
			const tokenPair = await this.generateTokenPair({
				id: user.id,
				name: user.name,
			});

			await this.updateRtHash(user.id, tokenPair.refresh_token);

			return { ...user, ...tokenPair };
		} else {
			throw new UnauthorizedException('Email or password wrong!');
		}
	}
	async updateRtHash(userId: string, refresh_token: string): Promise<void> {
		const hashedRefreshToken = await bcrypt.hash(refresh_token, 10);
		await this.prisma.clients.update({
			where: {
				id: userId,
			},
			data: {
				refresh_token: hashedRefreshToken,
			} as Prisma.ClientsUpdateInput,
		});
	}
}
