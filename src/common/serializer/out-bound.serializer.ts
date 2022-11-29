import {Serializer} from "@nestjs/microservices";

export class OutBoundSerializer implements Serializer {
    serialize(value: any): any {
        console.log('=====Outbound Message=====')
        console.log(value)
        return value
    }
}
