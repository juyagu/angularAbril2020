import {NgModule}  from '@angular/core';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';


@NgModule({
    declarations:[],
    imports:[
        AccordionModule.forRoot(),
        AlertModule.forRoot(),
        ButtonsModule.forRoot()
    ],
    exports:[AccordionModule,AlertModule,ButtonsModule]
})
export  class AppBoostrapModule {}