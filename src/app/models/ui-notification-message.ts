import {Message} from "primeng/api";


export interface UiNotificationMessage extends Message {
  clearOnRouteChange?: boolean;
}
