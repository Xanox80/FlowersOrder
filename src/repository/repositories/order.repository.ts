import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { Flowers, Orders, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';
import { OrdersUpdaterequestDto } from 'src/common/dto/orders/request';

@Injectable()
export class OrdersRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createOrder(flowerId: string, data: OrdersDto): Promise<any> {
		const { numbers } = data;
		const flower = await this.getFlower(flowerId);
		const { price } = flower;

		const totalPrice = price * numbers;

		if (flower.number < numbers) {
			throw new BadRequestException('Not enough flowers available');
		}

		await this.prisma.flowers.update({
			where: {
				id: flowerId,
			},
			data: {
				number: {
					decrement: numbers,
				},
			},
		});

		return await this.prisma.orders.create({
			data: {
				...data,
				price: totalPrice,
			},
		});
	}
	async updateOrder(
		orderId: string,
		flowerId: string,
		data: OrdersUpdaterequestDto
	): Promise<any> {
		const { numbers } = data;
		const order = await this.prisma.orders.findUnique({
			where: {
				id: orderId,
			},
		});

		if (!order) {
			throw new NotFoundException('Order not found');
		}

		const flower = await this.getFlower(flowerId);
		const { price } = flower;
		const totalPrice = price * numbers;

		if (flower.number < numbers) {
			throw new BadRequestException('Not enough flowers available');
		}

		await this.prisma.flowers.update({
			where: {
				id: flowerId,
			},
			data: {
				number: {
					increment: order.numbers,
				},
			},
		});

		await this.prisma.flowers.update({
			where: {
				id: flowerId,
			},
			data: {
				number: {
					decrement: numbers,
				},
			},
		});

		return await this.prisma.orders.update({
			where: {
				id: orderId,
			},
			data: {
				...data,
				price: totalPrice,
			},
		});
	}

	async deleteOrders(id: string): Promise<void> {
		const orderToDelete = await this.prisma.orders.findUnique({
			where: {
				id: id,
			},
		});
		if (!orderToDelete) {
			throw new BadRequestException('Order not found');
		}

		await this.prisma.orders.delete({
			where: {
				id: id,
			},
		});
	}

	async getFlower(id: string): Promise<Flowers> {
		try {
			return await this.prisma.flowers.findUnique({
				where: {
					id: id,
				},
			});
		} catch (error) {
			throw new BadRequestException(error);
		}
	}

	async getOrderById(id: string): Promise<Orders> {
		try {
			return await this.prisma.orders.findUnique({
				where: { id },
			});
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}
}
