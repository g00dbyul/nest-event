import {Module} from "@nestjs/common";
import {EventHelper} from "../helper/event.helper";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
    imports:[
        ClientsModule.register([
            {
                name: 'MESSAGE_QUEUE',
                transport: Transport.NATS,
                options: {
                    servers: ['nats://localhost:4222'],
                }}
        ])
    ],
    providers:[EventHelper],
    exports: [EventHelper]
})
export class EventClientModule {}
