import { Component } from "@angular/core";
import { serviceService } from './second/service.service'

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
    providers: [serviceService]
})
export class AppComponent { }
