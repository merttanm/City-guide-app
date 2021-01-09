import { SegmentedBar, SegmentedBarItem } from "tns-core-modules/ui/segmented-bar";
import { ItemEventData } from "tns-core-modules/ui/list-view";
import { Component, OnInit } from "@angular/core";

import { serviceService } from '../second/service.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
	selector: "Page",
	moduleId: module.id,
	templateUrl: "./page.component.html",
	styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

	constructor(private service: serviceService, private route: ActivatedRoute, private router: Router) {
	}

	onButtonTap(): void {
		this.router.navigate([''])
	}

	findCateory
	category
	Facts = {}

	ngOnInit(): void {
		this.route.params.subscribe(params => this.category = params['id'])
		this.service.getCategory(this.category).subscribe(fact => {
			return this.Facts = fact
		})
		console.log(this.Facts)
	}

	goBack() {
		this.router.navigate([''])
	}
}