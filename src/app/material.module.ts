import { NgModule } from '@angular/core';

import{
    MatButtonModule, 
    MatSelectModule, 
    MatIconModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSliderModule,
    MatSlideToggleModule
}from '@angular/material'

@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSliderModule,
        MatSlideToggleModule
    ],
    exports:[
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatRadioModule,
        MatSliderModule,
        MatSlideToggleModule
    ]
})


export class MaterialModule {}