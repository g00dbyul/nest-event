import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {OrderModule} from "./order/order.module";
import {DeliveryModule} from "./delivery/delivery.module";
import {StockModule} from "./stock/stock.module";
import {ClientsModule, Transport} from "@nestjs/microservices";

@Module({
  imports: [
      OrderModule,
    DeliveryModule,
    StockModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
