import {Body, Controller, Post} from "@nestjs/common";
import {OrderService} from "./order.service";
import {OrderDTO} from "./order.dto";

@Controller('/order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder(@Body() { productCode, address }: OrderDTO) {
        return await this.orderService.createOrder(productCode, address);
    }
}
