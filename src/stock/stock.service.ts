import {Injectable} from "@nestjs/common";

@Injectable()
export class StockService {
    async modifyStock(data: any) {
        console.log(data)
        return data
    }
}
