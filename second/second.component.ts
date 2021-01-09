import { Component, OnInit } from "@angular/core";
import { ItemEventData } from "tns-core-modules/ui/list-view"
//import { RouterExtensions } from "nativescript-angular/router";
//import { ActivatedRoute } from "@angular/router";
import { serviceService } from './service.service'


@Component({
    selector: "Second",
    moduleId: module.id,
    templateUrl: "./second.component.html",
    styleUrls: ['./second.component.css']

})

export class SecondComponent implements OnInit {
    onButtonTap(): void {
        console.log("Button was pressed");
    }


    onItemTap(args: ItemEventData): void {
        console.log('Item with index: ' + args.index + ' tapped');
    }

    facts = [];

    constructor(private serviceService: serviceService) {
    }

    ngOnInit() {
        this.serviceService.getData().subscribe((result) => {
            this.facts = result
        }, (error) => {
            console.log(error);
        });
        console.log(this.facts)
    }



}