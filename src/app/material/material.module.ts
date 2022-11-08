import { NgModule } from '@angular/core';
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatTooltipModule } from "@angular/material/tooltip";

const MATERIAL = [
  MatGridListModule,
  MatButtonToggleModule,
  MatTooltipModule
]

@NgModule({
  imports: [MATERIAL],
  exports: [MATERIAL]
})
export class MaterialModule {
}
