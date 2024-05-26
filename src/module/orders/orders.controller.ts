import {
	Controller,
	HttpCode,
	HttpStatus,
	Post,
	Param,
	Body,
	Delete,
	Get,
	Put,
	BadRequestException,
	Query,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';
import { OrdersResponseDto } from 'src/common/dto/orders/response';
import { OrdersService } from './orders.service';
import { OrdersUpdaterequestDto } from 'src/common/dto/orders/request';

@Controller('orders')
@ApiTags('Orders')
@ApiBearerAuth()
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@ApiOperation({ description: 'Create Orders' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: OrdersResponseDto })
	@Post('/:flowerId')
	async createOrder(
		@Param('flowerId') flowerId: string,
		@Body() data: OrdersDto
	): Promise<any> {
		return await this.ordersService.createOrder(flowerId, data);
	}

	@ApiOperation({ description: 'Delete Orders' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	@Delete('/deleteOrder/:id')
	async deleteOrder(@Param('id') id: string): Promise<void> {
		await this.ordersService.deleteOrder(id);
	}

	@ApiOperation({ description: 'Delete Orders' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	@Get('/getOrder/:id')
	async getOrder(@Param('id') id: string): Promise<OrdersResponseDto[]> {
		const order = await this.ordersService.getOrderById(id);
		return [order];
	}

	@Put(':orderId')
	async updateOrder(
		@Param('orderId') orderId: string,
		@Query('flowerId') flowerId: string,
		@Body() updateOrderDto: OrdersUpdaterequestDto
	): Promise<any> {
		try {
			return await this.ordersService.updateOrders(
				orderId,
				flowerId,
				updateOrderDto
			);
		} catch (error) {
			throw new BadRequestException(error.message);
		}
	}
}
