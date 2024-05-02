import {
	Controller,
	Post,
	Delete,
	Param,
	Body,
	HttpCode,
	HttpStatus,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersDto } from 'src/common/dto/orders/orders.dto';
import { OrdersResponseDto } from 'src/common/dto/orders/response';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('orders')
@ApiTags('Orders')
@ApiBearerAuth()
@Controller('orders')
export class OrdersController {
	constructor(private readonly ordersService: OrdersService) {}

	@ApiOperation({ description: 'Create Orders' })
	@HttpCode(HttpStatus.OK)
	@ApiResponse({ type: OrdersResponseDto })
	@Post(':flowerId')
	async createOrder(
		@Param('flowerId') flowerId: string,
		@Body() data: OrdersDto
	): Promise<any> {
		return await this.ordersService.createOrder(flowerId, data);
	}

	@ApiOperation({ description: 'Delete Orders' })
	@HttpCode(HttpStatus.OK)
	@ApiBearerAuth()
	@Delete(':id')
	async deleteOrder(@Param('id') id: string): Promise<void> {
		await this.ordersService.deleteOrder(id);
	}
}
