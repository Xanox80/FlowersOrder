import { BadRequestException, Injectable } from '@nestjs/common';
import { Flowers, Orders } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';

@Injectable()
export class OrdersRepository {
	constructor(private readonly prisma: PrismaService) {}

	async createOrder(flowerId: string, data: OrdersDto): Promise<any> {
		const { kind, numbers } = data;

<<<<<<< HEAD
		const flower = await this.getFlower(flowerId);
		const { price } = flower;

		const totalPrice = price * numbers;

=======
		
		const flower = await this.getFlower(flowerId);
		const { price } = flower;

		
		const totalPrice = price * numbers;

		
>>>>>>> cd104f94e9b109281e54b95dbf94b7a6773a21b0
		if (flower.number < numbers) {
			throw new BadRequestException('Not enough flowers available');
		}

<<<<<<< HEAD
=======
		
>>>>>>> cd104f94e9b109281e54b95dbf94b7a6773a21b0
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
<<<<<<< HEAD
				count: data.numbers,
=======
				count: data.numbers, 
>>>>>>> cd104f94e9b109281e54b95dbf94b7a6773a21b0
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
