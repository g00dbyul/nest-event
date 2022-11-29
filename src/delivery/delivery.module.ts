import {Module} from "@nestjs/common";
import {DeliveryController} from "./delivery.controller";
import {DeliveryService} from "./delivery.service";
import {EventClientModule} from "../common/event-client/event-client.module";

@Module({
    imports: [EventClientModule],
    controllers: [DeliveryController],
    providers: [DeliveryService]
})
export class DeliveryModule {}
