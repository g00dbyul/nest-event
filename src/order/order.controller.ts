import {Controller, Post} from "@nestjs/common";
import {OrderService} from "./order.service";

@Controller('/order')
export class OrderController {
    constructor(private readonly orderService: OrderService) {}

    @Post()
    async createOrder() {
        return await this.orderService.createOrder();
    }
}
