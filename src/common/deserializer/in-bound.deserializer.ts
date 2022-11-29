import {ConsumerDeserializer} from "@nestjs/microservices";

export class InBoundDeserializer implements ConsumerDeserializer {
    deserialize(value: any, options?: Record<string, any>): any {
        console.log('=====Inbound Message=====')
        console.log(value)
        return value
    }
}
