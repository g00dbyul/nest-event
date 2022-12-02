import {Module} from "@nestjs/common";
import {OrderController} from "./order.controller";
import {OrderService} from "./order.service";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [
        ClientsModule.register(
        [{name: 'EVENT_QUEUE', transport: Transport.NATS}]
        )
    ],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}
