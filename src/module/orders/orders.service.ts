import { Injectable } from '@nestjs/common';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';
import { OrdersRepository } from 'src/repository/repositories/order.repository';

@Injectable()
export class OrdersService {
	constructor(private readonly ordersRepository: OrdersRepository) {}

	async createOrder(flowerId: string, data: OrdersDto): Promise<any> {
		return await this.ordersRepository.createOrder(flowerId, data);
	}

	async deleteOrder(id: string): Promise<void> {
		await this.ordersRepository.deleteOrders(id);
	}
}
