import {Controller, Post} from "@nestjs/common";
import {StockService} from "./stock.service";

@Controller('stock')
export class StockController {
    constructor(private readonly stockService: StockService) {}

    @Post()
    async modifyStock() {
        return await this.stockService.modifyStock();
    }
}
