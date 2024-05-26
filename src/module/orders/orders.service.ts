import { BadRequestException, Injectable } from '@nestjs/common';
import { Orders } from '@prisma/client';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';
import { OrdersUpdaterequestDto } from 'src/common/dto/orders/request';
import { OrdersRepository } from 'src/repository/repositories/order.repository';

@Injectable()
export class OrdersService {
	constructor(private readonly ordersRepository: OrdersRepository) {}

	async createOrder(flowerId: string, data: OrdersDto): Promise<any> {
		return await this.ordersRepository.createOrder(flowerId, data);
	}

	async getOrderById(id: string): Promise<Orders> {
		try {
			const order = await this.ordersRepository.getOrderById(id);
			return order;
		} catch (error) {
			throw new BadRequestException(error);
		}
	}

	async deleteOrder(id: string): Promise<void> {
		await this.ordersRepository.deleteOrders(id);
	}

	async updateOrders(
		flowerId: string,
		id: string,
		data: OrdersUpdaterequestDto
	): Promise<any> {
		try {
			return await this.ordersRepository.updateOrder(flowerId, id, data);
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}
}
