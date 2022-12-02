import {Injectable} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";
import {DeliveryService} from "./delivery.service";

@Injectable()
export class DeliveryEventListener {
    constructor(private readonly deliveryService: DeliveryService) {
        EventHelper.init('order', this.orderEventListener(this.deliveryService));
    }

    orderEventListener(deliveryService: DeliveryService) {
        return async (err, message) => {
            console.log('=====Execute create delivery=====')
            if (err) {
                throw new Error(err)
            }
            await deliveryService.createDelivery(JSON.parse(message.data).data)
        }
    }
}
