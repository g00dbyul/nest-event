import {Inject, Injectable} from "@nestjs/common";
import {ClientProxy} from "@nestjs/microservices";

@Injectable()
export class OrderService {
    constructor(@Inject('EVENT_QUEUE') private client: ClientProxy) {}

    async createOrder(productCode: string, address: string) {
        await this.client.emit('order', { productCode, address })
        return { productCode, address }
    }
}
