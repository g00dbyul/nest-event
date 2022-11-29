import {Injectable} from "@nestjs/common";
import {EventHelper} from "../common/helper/event.helper";
import {connect} from "ts-nats";
import {EventManager} from "../common/manager/event.manager";

@Injectable()
export class StockService {
    constructor() {
        EventHelper.init().then((client) => {
            client.subscribe('order', this.modifyStock)
        })
    }



    async modifyStock() {
        console.log('Execute modify stock')
    }
}
