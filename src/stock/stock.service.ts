import {Injectable} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";

@Injectable()
export class StockService {
    async modifyStock(data: any) {
        console.log(data)
    }
}
