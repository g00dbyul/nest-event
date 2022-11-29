import {Controller, Post} from "@nestjs/common";
import {DeliveryService} from "./delivery.service";

@Controller('delivery')
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}

    @Post()
    async createDelivery() {
        return await this.deliveryService.createDelivery();
    }
}
