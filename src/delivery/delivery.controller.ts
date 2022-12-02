import {Controller, Inject, Post} from "@nestjs/common";
import {DeliveryEventListener} from "./delivery.event.listener";
import {DeliveryService} from "./delivery.service";

@Controller('delivery')
export class DeliveryController {
    constructor(
        @Inject('DELIVERY SERVICE')
        private readonly deliveryService: DeliveryService
    ) {}

    @Post()
    async createDelivery(data: any) {
        return await this.deliveryService.createDelivery(data);
    }
}
