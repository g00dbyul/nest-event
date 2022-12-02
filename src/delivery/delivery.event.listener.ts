import {Controller, Inject} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";
import {DeliveryService} from "./delivery.service";
import {Message} from "../common/type/message";

@Controller()
export class DeliveryEventListener {
    constructor(
        @Inject('DELIVERY SERVICE')
        private readonly deliveryService: DeliveryService
    ) {
        EventHelper.init('order', this.orderEventListener(this.deliveryService));
    }

    orderEventListener(deliveryService: DeliveryService) {
        return async (err, message: Message) => {
            console.log('=====Execute create delivery=====')
            if (err) {
                throw new Error(err)
            }
            await deliveryService.createDelivery(JSON.parse(message.data).data)
        }
    }
}
