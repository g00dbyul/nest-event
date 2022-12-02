import {Injectable} from "@nestjs/common";

@Injectable()
export class DeliveryService {
    async createDelivery(data: any) {
        console.log(data)
        return data
    }
}
