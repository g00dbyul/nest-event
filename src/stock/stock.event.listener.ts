import {Controller, Inject} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";
import {StockService} from "./stock.service";
import {Message} from "../common/type/message";

@Controller()
export class StockEventListener {
    constructor(
        @Inject('STOCK SERVICE')
        private readonly stockService: StockService,
    ) {
        EventHelper.init('order', this.orderEventListener(this.stockService))
    }

    orderEventListener(stockService: StockService) {
        return async (err, message: Message) => {
            console.log('=====Execute modify stock=====')
            if (err) {
                throw new Error(err)
            }
            await stockService.modifyStock(JSON.parse(message.data).data)
        }
    }
}
