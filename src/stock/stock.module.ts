import {Module} from "@nestjs/common";
import {StockController} from "./stock.controller";
import {StockService} from "./stock.service";
import {EventClientModule} from "../common/event-client/event-client.module";

@Module({
    imports: [EventClientModule],
    controllers: [StockController],
    providers: [StockService]
})
export class StockModule {}
