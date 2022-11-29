import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import {connect} from "ts-nats";

@Injectable()
export class EventHelper {
     static init() {
        return connect({
            servers: ['nats://localhost:4222'],
            timeout: 1000,
        })
    }
}
