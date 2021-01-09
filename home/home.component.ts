import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { Page } from "ui/page";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { isIOS } from "tns-core-modules/platform";

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {



    onButtonTap(): void {
        this.router.navigate(['second-page']);
    }


    @ViewChild("rsd", { static: true }) rSideDrawer: ElementRef;

    cities: { index: number, name: string, city: string, state: string, temp: string, img: string }[] = [
        { index: 0, name: "Banff, AB", city: "Banff", state: "Alberta, Canada", temp: "21°C", img: "~/images/banff.jpg" },
        { index: 1, name: "Barrow, AK", city: "Barrow", state: "Alaska, USA", temp: "-5°F", img: "~/images/barrow.jpg" },
        { index: 2, name: "San Diego, CA", city: "San Diego", state: "California, USA", temp: "84°F", img: "~/images/sandiego.jpg" },
        { index: 3, name: "Beyoğlu, İST", city: "Beyoğlu", state: "İstanbul, TR", temp: "84°F", img: "~/images/beyoglu.jpg" },
        { index: 4, name: "Üsküdar, İST", city: "Üsküdar", state: "İstanbul, TR", temp: "84°F", img: "~/images/üsküdar.jpg" },
        { index: 5, name: "Konak, İZM", city: "Konak", state: "İzmir, TR", temp: "84°F", img: "~/images/konak.jpg" },
        { index: 6, name: "Of, TRB", city: "Of", state: "Trabzon, TR", temp: "84°F", img: "~/images/of.jpg" },
        { index: 7, name: "Midyat, MRD", city: "Midyat", state: "Mardin, TR", temp: "84°F", img: "~/images/midyat.jpg" }

    ];


    city = this.cities[0].city;
    state = this.cities[0].state;
    temp = this.cities[0].temp;
    img = this.cities[0].img;

    constructor(private page: Page, private router: RouterExtensions) { }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

   



    drawerLoaded(args) {
        let drawer = <RadSideDrawer>args.object;

        if (isIOS) {
            // if your menu is drawn 'below' the hostview, do this:
            //drawer.ios.defaultSideDrawer.style.shadowMode = 1; // TKSideDrawerShadowMode.Hostview;
            drawer.ios.defaultSideDrawer.style.shadowMode = 2; // TKSideDrawerShadowMode.SideDrawer;
            // if you have shadowMode = 2, then you can add a little dim to the lower layer to add some depth. Keep it subtle though:
            drawer.ios.defaultSideDrawer.style.dimOpacity = 0.12;
            // then tweak the shadow to your liking:
            drawer.ios.defaultSideDrawer.style.shadowOpacity = 0.75; // 0-1, higher is darker
            drawer.ios.defaultSideDrawer.style.shadowRadius = 5; // higher is more spread
            // bonus feature: control the menu animation speed (in seconds)
            drawer.ios.defaultSideDrawer.transitionDuration = 0.25;
        }
    }

    onOpenDrawerTap(): void {
        this.rSideDrawer.nativeElement.toggleDrawerState();
    }

    chooseCity(args): void {
        let obj = this.cities[args.index];

        this.city = obj.city;
        this.state = obj.state;
        this.temp = obj.temp;
        this.img = obj.img;

        this.rSideDrawer.nativeElement.toggleDrawerState();
    }








}
