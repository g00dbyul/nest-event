import {Module} from "@nestjs/common";
import {DeliveryController} from "./delivery.controller";
import {DeliveryEventListener} from "./delivery.event.listener";
import {DeliveryService} from "./delivery.service";
import {StockService} from "../stock/stock.service";

@Module({
    imports: [],
    controllers: [DeliveryController, DeliveryEventListener],
    providers: [
        { provide: 'DELIVERY SERVICE', useClass: DeliveryService }
    ]
})
export class DeliveryModule {}
