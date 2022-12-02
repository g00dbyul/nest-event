import {EventHelper} from "../common/helper/event.helper";
import {StockService} from "./stock.service";
import {Controller, Inject, Injectable} from "@nestjs/common";

@Injectable()
export class StockEventListener {
    constructor(
        @Inject('STOCK SERVICE')
        private readonly stockService: StockService,
    ) {
        EventHelper.init('order', this.orderEventListener(this.stockService))
    }

    orderEventListener(stockService: StockService) {
        return async (err, message) => {
            console.log('=====Execute modify stock=====')
            if (err) {
                throw new Error(err)
            }
            await stockService.modifyStock(JSON.parse(message.data).data)
        }
    }
}
