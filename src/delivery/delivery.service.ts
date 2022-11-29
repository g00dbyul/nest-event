import {Injectable} from "@nestjs/common";
import {connect} from "ts-nats";
import {EventHelper} from "../common/helper/event.helper";
import {EventManager} from "../common/manager/event.manager";

@Injectable()
export class DeliveryService {
    constructor() {
        EventHelper.init().then((client) => {
            client.subscribe('order', this.createDelivery)
        })
    }

    async createDelivery() {
        console.log('Execute create delivery')
    }
}
