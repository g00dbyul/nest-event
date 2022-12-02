import {connect} from "ts-nats";

export class EventHelper {
     static init(subject:string, cb:any) {
        return connect({
            servers: ['nats://localhost:4222'],
            timeout: 1000,
        }).then(client => {
            client.subscribe(subject, cb)
        })
    }
}
