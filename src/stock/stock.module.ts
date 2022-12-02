import {Module} from "@nestjs/common";
import {StockController} from "./stock.controller";
import {StockEventListener} from "./stock.event.listener";
import {StockService} from "./stock.service";

@Module({
    imports: [],
    controllers: [StockController],
    providers: [
        { provide: 'STOCK SERVICE', useClass: StockService },
        { provide: 'STOCK EVENT LISTENER', useClass: StockEventListener },
    ]
})
export class StockModule {}
