import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { HttpClientModule } from '@angular/common/http'

import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptRouterModule } from "nativescript-angular/router";


import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SecondComponent } from "./second/second.component";
import { PageComponent } from "./page/page.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptHttpClientModule,
        HttpClientModule
    ],
    declarations: [
        AppComponent,
        SecondComponent

    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
