import {EventHelper} from "../helper/event.helper";

export class EventManager {
    constructor() {
        this.eventHelper = new EventHelper();
        return this.eventHelper.init();
    }
    private eventHelper;
    protected eventManager;
}
