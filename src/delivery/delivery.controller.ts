import {Controller, Post} from "@nestjs/common";
import {DeliveryEventListener} from "./delivery.event.listener";
import {DeliveryService} from "./delivery.service";

@Controller('delivery')
export class DeliveryController {
    constructor(private readonly deliveryService: DeliveryService) {}

    @Post()
    async createDelivery(data: any) {
        return await this.deliveryService.createDelivery(data);
    }
}
