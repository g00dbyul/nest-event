import {Inject, Injectable} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";
import {connect} from "ts-nats";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class OrderService {
    constructor(@Inject('MESSAGE_QUEUE') private readonly client: ClientProxy) {}


    async createOrder() {
        await this.client.emit('order', {})
        return 'Order'
    }
}
