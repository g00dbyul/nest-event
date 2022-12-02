import {Controller, Inject, Post} from "@nestjs/common";
import {StockService} from "./stock.service";
import {EventHelper} from "../common/helper/event.helper";

@Controller('/stock')
export class StockController {
    constructor(
        @Inject('STOCK SERVICE')
        private readonly stockService: StockService,
    ) {}

    @Post()
    async modifyStock(data: any) {
        return await this.stockService.modifyStock(data);
    }
}
