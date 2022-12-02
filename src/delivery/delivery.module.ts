import {Module} from "@nestjs/common";
import {DeliveryController} from "./delivery.controller";
import {DeliveryEventListener} from "./delivery.event.listener";
import {DeliveryService} from "./delivery.service";

@Module({
    imports: [],
    controllers: [DeliveryController],
    providers: [DeliveryService, DeliveryEventListener]
})
export class DeliveryModule {}
