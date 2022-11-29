import {Module} from "@nestjs/common";
import {OrderController} from "./order.controller";
import {OrderService} from "./order.service";
// import {EventClientModule} from "../common/event-client/event-client.module";
import {EventHelper} from "../common/helper/event.helper";
import {EventClientModule} from "../common/event-client/event-client.module";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports: [ClientsModule.register([
        {
            name: 'MESSAGE_QUEUE',
            transport: Transport.NATS,
            options: {
                servers: ['nats://localhost:4222'],
            }}
    ])],
    controllers: [OrderController],
    providers: [OrderService]
})
export class OrderModule {}
